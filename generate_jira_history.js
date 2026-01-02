
const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, 'Jira.csv');
const outputPath = path.join(__dirname, 'restore_history_full.ps1');

try {
    const data = fs.readFileSync(csvPath, 'utf8');
    const lines = data.split(/\r?\n/);
    const headers = lines[0].split(',');

    const commits = [];

    // Columns indices (based on view_file output)
    // 0: Summary
    // 1: Issue key
    // 3: Issue Type
    // 19: Created (e.g. 22/Dec/25 12:12 PM)

    // Helper to parse date "22/Dec/25 12:12 PM" -> ISO String
    const parseDate = (dateStr) => {
        if (!dateStr) return null;
        // Basic mapping for month names to index
        const months = { 'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5, 'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11 };
        
        // Regex to extract parts: 22/Dec/25 12:12 PM
        const match = dateStr.match(/(\d{1,2})\/([a-zA-Z]{3})\/(\d{2})\s+(\d{1,2}):(\d{2})\s+(PM|AM)/);
        if (!match) return null;

        let [_, day, monthStr, yearShort, hour, minute, meridiem] = match;
        let year = 2000 + parseInt(yearShort, 10);
        let month = months[monthStr];
        let h = parseInt(hour, 10);
        if (meridiem === 'PM' && h < 12) h += 12;
        if (meridiem === 'AM' && h === 12) h = 0;

        return new Date(year, month, parseInt(day), h, parseInt(minute));
    };

    // CSV Parsing (Handling quotes roughly, but usually headers are standard)
    // Simple line split might break if summary has newlines, but let's try row by row with regex for quoted commas if needed.
    // For now, simple split, assuming no multiline summaries in CSV export logic usually escaped.
    
    // Better Regex for CSV split handling quotes:
    const splitCSV = (str) => {
        const matches = str.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        // This is a naive regex, let's stick to standard line processing but identifying the structure.
        // Actually, the view_file showed standard comma separation.
        // Let's rely on string.split(',') but be careful of commas in quotes.
        // Given complexity, let's use a simpler approach: regex match.
        // But since I can't npm install csv-parser, I'll write a mini parser.
        const res = [];
        let inQuote = false;
        let buffer = '';
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (char === '"') {
                inQuote = !inQuote;
            } else if (char === ',' && !inQuote) {
                res.push(buffer);
                buffer = '';
                continue;
            }
            buffer += char;
        }
        res.push(buffer);
        return res;
    };

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const cols = splitCSV(line);
        // Column mapping safety
        if (cols.length < 20) continue;

        const summaryRaw = cols[0];
        const key = cols[1];
        const issueType = cols[3];
        const dateStr = cols[19];

        // Clean summary (remove quotes)
        const summary = summaryRaw.replace(/^"|"$/g, '').trim();

        const date = parseDate(dateStr);
        if (date && key && summary) {
            commits.push({ date, key, summary, issueType });
        }
    }

    // Sort by date ascending
    commits.sort((a, b) => a.date - b.date);

    // Generate PowerShell content
    let psContent = `
# Restore Git History from Jira
Write-Host "Creating history branch..."
git checkout --orphan history_rebuild
# Unstage all files but KEEP them in working directory
git reset .

Write-Host "Generating commits..."
`;

    commits.forEach((c, index) => {
        // Format date: "2025-12-22 14:30:00"
        const iso = c.date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        // Git message
        const msg = `[${c.key}] ${c.summary}`;
        
        // Write message to a temporary file specific to this commit (to avoid race conditions if any parallel, though this is serial)
        // We can just echo to a file in PowerShell, but echo has quoting issues too.
        // Safer: Write pure text using Set-Content -NoNewline (PS 5+) or just echo with care.
        // Actually, best to write the file in Node? No, this node script generates a PS1 script.
        
        // Solution: Use a here-string in PowerShell to write the file content.
        // @"
        // content
        // "@
        
        // Escape specific chars for here-string if needed (only newline? or "@ at start of line)
        // Our summaries are single line so safe.
        
        psContent += `
$env:GIT_COMMITTER_DATE='${iso}'
$env:GIT_AUTHOR_DATE='${iso}'
@"
${msg}
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt
`;
    });

    psContent += `
Write-Host "Committing current project state..."
$env:GIT_COMMITTER_DATE='${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}'
$env:GIT_AUTHOR_DATE='${new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')}'
git add .
git commit -m "Project State Checkpoint"

Write-Host "History reconstruction complete. Review 'history_rebuild' branch."
Write-Host "To apply: git checkout main; git reset --hard history_rebuild; git push -f origin main"
`;

    // Write with BOM for PowerShell UTF-8
    fs.writeFileSync(outputPath, '\ufeff' + psContent, { encoding: 'utf8' });
    console.log(`Generated ${commits.length} commits in ${outputPath}`);

} catch (err) {
    console.error('Error generating script:', err);
}
