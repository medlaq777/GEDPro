
# Restore-GitHistory.ps1
# Simulates a git history based on Jira tasks from Dec 22, 2025 to Jan 2, 2026.

Write-Host "Initializing Git Repository..."
git init

# List of commits to simulate
$commits = @(
    @{
        Date = "2025-12-22T09:00:00"
        Message = "chore: Initial project setup and configuration [GED-7]"
        Files = @("package.json", "package-lock.json", "tsconfig.json", "nest-cli.json", ".gitignore", "README.md", ".prettierrc", "eslint.config.mjs", "tsconfig.build.json")
    },
    @{
        Date = "2025-12-22T14:30:00"
        Message = "feat(auth): Implement Authentication & Security (JWT, Guards) [GED-1]"
        Files = @("src/modules/iam", "src/modules/organization")
    },
    @{
        Date = "2025-12-23T11:15:00"
        Message = "feat(docs): Document Management System (Upload, MinIO, OCR) [GED-2]"
        Files = @("src/modules/document-management")
    },
    @{
        Date = "2025-12-24T16:00:00"
        Message = "feat(forms): Dynamic Form Builder [GED-3]"
        Files = @("src/modules/form-builder")
    },
    @{
        Date = "2025-12-26T10:45:00"
        Message = "feat(recruitment): Candidate Management & Workflows [GED-4]"
        Files = @("src/modules/recruitment")
    },
    @{
        Date = "2025-12-29T14:20:00"
        Message = "feat(calendar): Interview Scheduling & Google Calendar Integration [GED-5]"
        Files = @("src/modules/integration")
    },
    @{
        Date = "2025-12-30T13:00:00"
        Message = "feat(core): Core Architecture, Pipes, and Interceptors [GED-7]"
        Files = @("src/core", "src/main.ts", "src/app.module.ts")
    },
    @{
        Date = "2026-01-02T10:00:00"
        Message = "docs: Update Swagger and Final Polish [GED-8]"
        Files = @("Jira.csv", "src/modules/notification") 
    },
     @{
        Date = "2026-01-02T16:00:00"
        Message = "refactor: Cleanup mock data and finalize requirements [GED-8]"
        Files = @(".") 
    }
)

foreach ($commit in $commits) {
    $date = $commit.Date
    $msg = $commit.Message
    $files = $commit.Files

    Write-Host "Creating commit: $msg ($date)"

    # Stage specific files
    foreach ($file in $files) {
        if (Test-Path $file) {
            git add $file
        } else {
            Write-Warning "File or directory not found: $file"
        }
    }

    # Set environment variables for the commit date
    $env:GIT_AUTHOR_DATE = $date
    $env:GIT_COMMITTER_DATE = $date

    # Commit only if there are changes
    if ((git status --porcelain) -ne "") {
        git commit -m "$msg"
    } else {
        Write-Host "  -> No changes to commit for this step."
    }
    
    Start-Sleep -Seconds 1
}

Write-Host "History reconstruction complete!"
git log --oneline --graph --all
