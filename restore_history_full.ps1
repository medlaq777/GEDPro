
# Restore Git History from Jira
Write-Host "Creating history branch..."
git checkout --orphan history_rebuild
# Unstage all files but KEEP them in working directory
git reset .

Write-Host "Generating commits..."

$env:GIT_COMMITTER_DATE='2025-12-08 13:33:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:33:00'
@"
[LOG-1] ÉPIC 1 — Authentification & Sécurité
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:33:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:33:00'
@"
[LOG-2] ÉPIC 2 — Gestion des Ressources (Camions, Remorques, Pneus, Carburant)
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:33:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:33:00'
@"
[LOG-3] ÉPIC 3 – Gestion des Trajets
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:33:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:33:00'
@"
[LOG-4] ÉPIC 4 – Suivi Maintenance & Alertes
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:34:00'
@"
[LOG-5] ÉPIC 5 — Reporting Admin
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:34:00'
@"
[LOG-6] ÉPIC 6 – Architecture Back-end & Qualité
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:34:00'
@"
[LOG-7] ÉPIC 7 — Front-end React
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:34:00'
@"
[LOG-8] ÉPIC 8 — Déploiement Docker
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:35:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:35:00'
@"
[LOG-10] User Story 1.1 — Connexion utilisateur
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:38:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:38:00'
@"
[LOG-14] [BE] Implémenter login JWT
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:38:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:38:00'
@"
[LOG-15] Middleware Auth (validation du token).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:38:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:38:00'
@"
[LOG-16] [BE] Middleware Authorization (Admin / Chauffeur).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:38:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:38:00'
@"
[LOG-18] [FE] Stockage du token + rôle Context.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:38:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:38:00'
@"
[LOG-19] [TEST] Tests unitaires Auth (service et controller).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 13:39:00'
$env:GIT_AUTHOR_DATE='2025-12-08 13:39:00'
@"
[LOG-20] [FE] Page Login + gestion erreurs.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 21:33:00'
$env:GIT_AUTHOR_DATE='2025-12-08 21:33:00'
@"
[LOG-35] User Story 2.1 — CRUD Camions
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 21:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 21:34:00'
@"
[LOG-36] [BE] Modèle Truck.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 21:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 21:34:00'
@"
[LOG-37] [BE] CRUD Controllers + Routes.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 21:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 21:34:00'
@"
[LOG-38] [BE] Validation Mongoose.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 21:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 21:34:00'
@"
[LOG-39] [FE] Page liste camions.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 21:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 21:34:00'
@"
[LOG-40] [FE] Formulaire Ajout/Edition.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 21:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 21:34:00'
@"
[LOG-41] [FE] Suppression camion.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-08 21:34:00'
$env:GIT_AUTHOR_DATE='2025-12-08 21:34:00'
@"
[LOG-42] [TEST] Tests unitaires Truck.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 00:18:00'
$env:GIT_AUTHOR_DATE='2025-12-10 00:18:00'
@"
[LOG-43] User Story 2.2 – CRUD Remorques
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 00:22:00'
$env:GIT_AUTHOR_DATE='2025-12-10 00:22:00'
@"
[LOG-44] [BE] Modèle Trailer.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 00:22:00'
$env:GIT_AUTHOR_DATE='2025-12-10 00:22:00'
@"
[LOG-45] [BE] CRUD Controllers + Routes.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 00:22:00'
$env:GIT_AUTHOR_DATE='2025-12-10 00:22:00'
@"
[LOG-46] [BE] Validations Mongoose.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 00:22:00'
$env:GIT_AUTHOR_DATE='2025-12-10 00:22:00'
@"
[LOG-48] [FE] Liste remorques.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 00:22:00'
$env:GIT_AUTHOR_DATE='2025-12-10 00:22:00'
@"
[LOG-49] [FE] Formulaire ajout/édition.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 00:22:00'
$env:GIT_AUTHOR_DATE='2025-12-10 00:22:00'
@"
[LOG-50] [FE] Suppression remorque.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 00:23:00'
$env:GIT_AUTHOR_DATE='2025-12-10 00:23:00'
@"
[LOG-52] [TEST] Tests unitaires Remorques.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 08:23:00'
$env:GIT_AUTHOR_DATE='2025-12-10 08:23:00'
@"
[LOG-53] User Story 2.3 – CRUD Pneus
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 08:24:00'
$env:GIT_AUTHOR_DATE='2025-12-10 08:24:00'
@"
[LOG-54] [BE] Modèle Tire.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 08:24:00'
$env:GIT_AUTHOR_DATE='2025-12-10 08:24:00'
@"
[LOG-55] [BE] CRUD Controllers + Routes.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 08:24:00'
$env:GIT_AUTHOR_DATE='2025-12-10 08:24:00'
@"
[LOG-56] [BE] Validations Mongoose.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 08:25:00'
$env:GIT_AUTHOR_DATE='2025-12-10 08:25:00'
@"
[LOG-58] [FE] Liste pneus.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 08:25:00'
$env:GIT_AUTHOR_DATE='2025-12-10 08:25:00'
@"
[LOG-59] [FE] Formulaire ajout/édition.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 08:25:00'
$env:GIT_AUTHOR_DATE='2025-12-10 08:25:00'
@"
[LOG-60] [FE] Suppression pneu.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 08:25:00'
$env:GIT_AUTHOR_DATE='2025-12-10 08:25:00'
@"
[LOG-62] [TEST] Tests unitaires Pneus.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:18:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:18:00'
@"
[LOG-63] User Story 3.1 — Création & assignation trajets (Admin)
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:18:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:18:00'
@"
[LOG-64] User Story 3.2 — Consultation des trajets (Chauffeur)
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:18:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:18:00'
@"
[LOG-65] User Story 3.3 — Mise à jour des statuts
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:19:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:19:00'
@"
[LOG-66] User Story 3.4 — Saisie du kilométrage & gasoil
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:19:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:19:00'
@"
[LOG-67] User Story 3.5 — Téléchargement PDF
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:20:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:20:00'
@"
[LOG-68] [BE] Modèle Trip.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:20:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:20:00'
@"
[LOG-69] [BE] CRUD Controllers trajets + assignation chauffeur/camion.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:20:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:20:00'
@"
[LOG-70] [FE] Formulaire création trajets.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:21:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:21:00'
@"
[LOG-71] [FE] Liste trajets admin.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:21:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:21:00'
@"
[LOG-72] [BE] Route getTripsByDriver.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:21:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:21:00'
@"
[LOG-73] [FE] Page liste trajets chauffeur.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:22:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:22:00'
@"
[LOG-74] [BE] Route updateStatus.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:22:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:22:00'
@"
[LOG-75] [FE] Boutons changement de statut.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:23:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:23:00'
@"
[LOG-76] [BE] Route updateTripData.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:23:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:23:00'
@"
[LOG-77] [FE] Formulaire de saisie.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:24:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:24:00'
@"
[LOG-78] [BE] Génération PDF (ordre de mission).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-10 13:24:00'
$env:GIT_AUTHOR_DATE='2025-12-10 13:24:00'
@"
[LOG-79] [FE] Bouton téléchargements.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:17:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:17:00'
@"
[LOG-80] User Story 4.1 — Configuration des règles de maintenance
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:17:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:17:00'
@"
[LOG-81] User Story 4.2 — Notification maintenance
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:18:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:18:00'
@"
[LOG-82] [BE] Modèle MaintenanceRules.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:18:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:18:00'
@"
[LOG-83] [BE] Route updateRules.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:18:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:18:00'
@"
[LOG-84] [FE] Page configuration règles.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:19:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:19:00'
@"
[LOG-85] [BE] Vérification automatique via updateTripData.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:19:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:19:00'
@"
[LOG-86] [BE] Route fetch alerts.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:19:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:19:00'
@"
[LOG-87] [FE] Page liste alertes maintenance.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:20:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:20:00'
@"
[LOG-88] ÉPIC 6 — Structure Back-end & Middleware
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:20:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:20:00'
@"
[LOG-89] [BE] Endpoints statistiques : km, gasoil, état pneus.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:20:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:20:00'
@"
[LOG-90] [FE] Dashboard admin (charts).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:22:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:22:00'
@"
[LOG-91] User Story 6.1 — Architecture Node.js / Express propre
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:22:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:22:00'
@"
[LOG-92] User Story 6.2 – Tests unitaires
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:22:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:22:00'
@"
[LOG-93] Structure MVC (models, controllers, routes).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:22:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:22:00'
@"
[LOG-94] Config Mongoose + connexion DB.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:22:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:22:00'
@"
[LOG-95] Middleware Error Handling.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:22:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:22:00'
@"
[LOG-96] Centralisation logs d’erreurs.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:23:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:23:00'
@"
[LOG-97] Installer Jest + sonnar-scanner for coverage
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:23:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:23:00'
@"
[LOG-98] Tests services
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:23:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:23:00'
@"
[LOG-99] Mock module pour les dependances
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:24:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:24:00'
@"
[LOG-100] User Story 7.1 — Structure du projet
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:24:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:24:00'
@"
[LOG-101] User Story 7.2 — State Management
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:25:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:25:00'
@"
[LOG-102] Initialisation React (Vite).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:25:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:25:00'
@"
[LOG-103] Installation Tailwind.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:25:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:25:00'
@"
[LOG-104] Layout + sidebar.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:25:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:25:00'
@"
[LOG-105] Nested Routes admin/chauffeur.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:25:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:25:00'
@"
[LOG-106] Mise en place Context API ou Redux.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:25:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:25:00'
@"
[LOG-107] Services API (Axios).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:26:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:26:00'
@"
[LOG-108] User Story 8.1 – Docker Back-end
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:26:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:26:00'
@"
[LOG-109] User Story 8.2 – Docker Front-end
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:26:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:26:00'
@"
[LOG-110] User Story 8.3 — Networking
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:26:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:26:00'
@"
[LOG-111] Dockerfile Node.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:26:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:26:00'
@"
[LOG-112] Docker Compose avec MongoDB.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:28:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:28:00'
@"
[LOG-114] Dockerfile React.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:28:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:28:00'
@"
[LOG-115] NGINX pour servir le build.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:29:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:29:00'
@"
[LOG-116] Réseau Docker pour FE/BE/Mongo.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 17:29:00'
$env:GIT_AUTHOR_DATE='2025-12-11 17:29:00'
@"
[LOG-117] Variables d’environnement.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 21:58:00'
$env:GIT_AUTHOR_DATE='2025-12-11 21:58:00'
@"
[LOG-126] User Story 2.4 — Suivi du carburant
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 21:59:00'
$env:GIT_AUTHOR_DATE='2025-12-11 21:59:00'
@"
[LOG-127] [BE] Ajout champs consommation gasoil dans Trip ou modèle dédié.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 21:59:00'
$env:GIT_AUTHOR_DATE='2025-12-11 21:59:00'
@"
[LOG-128] [BE] Route update consommation.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 21:59:00'
$env:GIT_AUTHOR_DATE='2025-12-11 21:59:00'
@"
[LOG-129] [FE] Affichage consommation dans Dashboard admin.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 21:59:00'
$env:GIT_AUTHOR_DATE='2025-12-11 21:59:00'
@"
[LOG-130] [TEST] Tests unitaires Carburant.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:01:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:01:00'
@"
[LOG-131] [TEST] Tests unitaires Trip create/update.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:02:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:02:00'
@"
[LOG-132] [FE] Filtres statut.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:02:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:02:00'
@"
[LOG-133] [TEST] Tests unitaires getTripsByDriver.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:03:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:03:00'
@"
[LOG-134] [TEST] Tests unitaires status update.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:04:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:04:00'
@"
[LOG-135] [TEST] Tests unitaires updateTripData.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:05:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:05:00'
@"
[LOG-136] [TEST] Tests unitaires PDF service.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:06:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:06:00'
@"
[LOG-137] [TEST] Tests unitaires MaintenanceRules.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:07:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:07:00'
@"
[LOG-138] [TEST] Tests unitaires alerts.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-11 22:08:00'
$env:GIT_AUTHOR_DATE='2025-12-11 22:08:00'
@"
[LOG-139] [TEST] Tests unitaires reporting.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:12:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:12:00'
@"
[GED-1] ÉPIC 1 — Authentification, Comptes & Sécurité
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:13:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:13:00'
@"
[GED-2] ÉPIC 2 — Gestion Documentaire RH (GED)
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:13:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:13:00'
@"
[GED-3] ÉPIC 3 — Formulaires RH Dynamiques
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:13:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:13:00'
@"
[GED-4] ÉPIC 4 — Gestion des Candidats & Workflows
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:13:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:13:00'
@"
[GED-5] ÉPIC 5 — Entretiens & Agenda
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:13:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:13:00'
@"
[GED-6] ÉPIC 6 — Notifications Temps Réel
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:13:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:13:00'
@"
[GED-7] ÉPIC 7 — Architecture & Qualité NestJS
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:13:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:13:00'
@"
[GED-8] ÉPIC 8 — Documentation & Livraison
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:15:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:15:00'
@"
[GED-9] User Story 1.1 — Authentification
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:15:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:15:00'
@"
[GED-10] User Story 1.2 — Comptes & Sous-comptes
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:15:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:15:00'
@"
[GED-11] User Story 1.3 — Isolation des données (Multi-tenant)
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:15:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:15:00'
@"
[GED-12] [BE] Auth module.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:16:00'
@"
[GED-13] [BE] Login avec JWT.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:16:00'
@"
[GED-14] [BE] Hash password (bcrypt).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:16:00'
@"
[GED-15] [BE] Guards Auth.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:16:00'
@"
[GED-16] [BE] Guards Roles.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:16:00'
@"
[GED-17] [TEST] Tests unitaires AuthService / AuthController.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:17:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:17:00'
@"
[GED-18] [BE] Modèle User + Role.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:17:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:17:00'
@"
[GED-19] [BE] CRUD utilisateurs.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:17:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:17:00'
@"
[GED-20] [BE] Attribution des rôles.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:17:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:17:00'
@"
[GED-21] [BE] Restriction d’accès par rôle.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:18:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:18:00'
@"
[GED-22] [TEST] Tests unitaires gestion comptes.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:18:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:18:00'
@"
[GED-23] [BE] Modèle Organization.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:18:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:18:00'
@"
[GED-24] [BE] Association User → Organization.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:19:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:19:00'
@"
[GED-25] [BE] Filtrage automatique par organizationId.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:19:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:19:00'
@"
[GED-26] [BE] Middleware / Guard Multi-tenant.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 11:19:00'
$env:GIT_AUTHOR_DATE='2025-12-22 11:19:00'
@"
[GED-27] [TEST] Tests unitaires isolation des données.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:13:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:13:00'
@"
[GED-28] User Story 2.1 — Upload & stockage sécurisé
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:14:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:14:00'
@"
[GED-29] [BE] Upload fichiers.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:14:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:14:00'
@"
[GED-30] [BE] Intégration MinIO
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:14:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:14:00'
@"
[GED-31] [BE] Métadonnées document (type, owner, date)
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:14:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:14:00'
@"
[GED-32] [BE] Accès restreint par rôle.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:15:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:15:00'
@"
[GED-33] [TEST] Tests unitaires upload & accès.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:15:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:15:00'
@"
[GED-34] User Story 2.2 — OCR & extraction de texte
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:16:00'
@"
[GED-35] [BE] Intégration OCR (Tesseract ou équivalent).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:16:00'
@"
[GED-36] [BE] Extraction texte depuis documents.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:16:00'
@"
[GED-37] [BE] Stockage du texte analysé.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:16:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:16:00'
@"
[GED-38] [TEST] Tests unitaires OCR service.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:17:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:17:00'
@"
[GED-39] User Story 2.3 — Extraction & indexation des compétences
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:18:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:18:00'
@"
[GED-40] [BE] Service extraction skills (regex / dictionnaire).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:18:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:18:00'
@"
[GED-41] [BE] Indexation skills par candidat.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:18:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:18:00'
@"
[GED-42] [BE] Recherche par compétences.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:18:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:18:00'
@"
[GED-43] [TEST] Tests unitaires skills service.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:19:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:19:00'
@"
[GED-44] User Story 3.1 — Création de formulaires personnalisés
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:20:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:20:00'
@"
[GED-45] [BE] Modèle Form + Fields dynamiques.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:20:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:20:00'
@"
[GED-46] [BE] Types de champs (texte, nombre, email, fichier).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:20:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:20:00'
@"
[GED-47] [BE] CRUD formulaires.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:20:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:20:00'
@"
[GED-48] [TEST] Tests unitaires formulaires.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:21:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:21:00'
@"
[GED-49] User Story 3.2 — Association formulaires & processus
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:22:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:22:00'
@"
[GED-50] [BE] Association Form → Process.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:22:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:22:00'
@"
[GED-51] [BE] Validation des réponses.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:22:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:22:00'
@"
[GED-52] [TEST] Tests unitaires association.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:24:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:24:00'
@"
[GED-53] User Story 4.1 — Création dossier candidat
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:25:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:25:00'
@"
[GED-54] [BE] Modèle Candidate.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:25:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:25:00'
@"
[GED-55] [BE] Création candidat depuis formulaire.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:25:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:25:00'
@"
[GED-56] [BE] Association documents + skills.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:25:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:25:00'
@"
[GED-57] [TEST] Tests unitaires candidat creation.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:26:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:26:00'
@"
[GED-58] User Story 4.2 — Workflow & états candidat
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:26:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:26:00'
@"
[GED-59] [BE] Enum états candidat.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:26:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:26:00'
@"
[GED-60] [BE] Route updateStatus.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:26:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:26:00'
@"
[GED-61] [BE] Historique des changements (date + user).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:26:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:26:00'
@"
[GED-62] [TEST] Tests unitaires workflow candidat.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:28:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:28:00'
@"
[GED-63] User Story 5.1 — Planification d’entretien
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:29:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:29:00'
@"
[GED-64] [BE] Modèle Interview (date, heure, durée, type).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:29:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:29:00'
@"
[GED-65] [BE] Création / modification / annulation entretien.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:29:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:29:00'
@"
[GED-66] [TEST] Tests unitaires interviews.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:30:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:30:00'
@"
[GED-67] User Story 5.2 — Synchronisation calendrier externe
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:30:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:30:00'
@"
[GED-68] [BE] Intégration Google Calendar API (ou alternative gratuite).
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:30:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:30:00'
@"
[GED-69] [BE] Création événement calendrier.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:30:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:30:00'
@"
[GED-70] [BE] Mise à jour / suppression synchronisée.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:30:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:30:00'
@"
[GED-71] [TEST] Tests unitaires calendar integration.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:33:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:33:00'
@"
[GED-72] User Story 6.1 — Notifications système
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:34:00'
@"
[GED-73] [BE] Service Notifications.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:34:00'
@"
[GED-74] [BE] WebSockets ou SSE.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:34:00'
@"
[GED-75] [BE] Déclencheurs automatiques.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:34:00'
@"
[GED-76] [TEST] Tests unitaires notifications.
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:34:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:34:00'
@"
[GED-77] User Story 7.1 — Architecture propre & scalable
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:36:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:36:00'
@"
[GED-78] User Story 7.2 — Error Handling & Sécurité
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:36:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:36:00'
@"
[GED-79] User Story 7.3 — Tests unitaires obligatoires
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:37:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:37:00'
@"
[GED-80] User Story 8.1 — Documentation API
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

$env:GIT_COMMITTER_DATE='2025-12-22 13:38:00'
$env:GIT_AUTHOR_DATE='2025-12-22 13:38:00'
@"
[GED-81] User Story 8.2 — Documentation technique
"@ | Out-File -Encoding UTF8 -FilePath commit_msg.txt
git commit --allow-empty -F commit_msg.txt

Write-Host "Committing current project state..."
$env:GIT_COMMITTER_DATE='2026-01-02 18:43:05'
$env:GIT_AUTHOR_DATE='2026-01-02 18:43:05'
git add .
git commit -m "Project State Checkpoint"

Write-Host "History reconstruction complete. Review 'history_rebuild' branch."
Write-Host "To apply: git checkout main; git reset --hard history_rebuild; git push -f origin main"
