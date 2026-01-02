# 🚀 GEDPro - Intelligent HR Management System

**GEDPro** is a comprehensive, modular Human Resources Management System (HRMS) built with **NestJS**. It is designed to handle document management, recruitment workflows, dynamic forms, and secure authentication with multi-tenancy support.

---

## ✨ Key Features

### 🔐 Authentication & Security [GED-1]

- **JWT Authentication**: Secure access using JSON Web Tokens.
- **Role-Based Access Control (RBAC)**: Fine-grained permissions with Guards (`@Roles()`).
- **Multi-Tenancy**: Data isolation by Organization ID.

### 📄 Document Management [GED-2]

- **Secure Uploads**: Integration with **MinIO** (S3-compatible object storage).
- **OCR Analysis**: Automatic text extraction from uploaded documents (CVs, contracts) using **Tesseract.js**.
- **Metadata Storage**: Document metadata stored in **PostgreSQL**, analysis results in **MongoDB**.

### 📝 Dynamic Form Builder [GED-3]

- **Custom Forms**: Create HR forms with dynamic fields (Text, Number, Date, File).
- **Versioning**: Track form versions (`v1`, `v2`, etc.).
- **Submissions**: Store andvalidate user responses.

### 🤝 Recruitment & Workflows [GED-4]

- **Candidate Tracking**: Manage candidates through customizable states (New -> Screening -> Interview -> Offer -> Hired).
- **State Machine**: Robust workflow transitions ensuring process integrity.
- **Skill Extraction**: Automated skill tagging from CVs.

### 📅 Calendar & Scheduling [GED-5]

- **Interview Scheduling**: Book interviews with candidates.
- **Google Calendar Integration**: Sync events directly to Google Calendar via Service Account.

### 🔔 Real-Time Notifications [GED-6]

- **WebSocket Gateway**: Live updates for critical events (e.g., "New Application Received").

---

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) (Node.js)
- **Databases**:
  - **PostgreSQL**: Relational data (Users, Organizations, Candidates).
  - **MongoDB**: Unstructured data (OCR Analysis, Form Submissions).
- **ORM**: TypeORM (SQL) & Mongoose (NoSQL).
- **Storage**: MinIO (Object Storage).
- **External APIs**: Google Calendar API.
- **Documentation**: Swagger (OpenAPI).

---

## ⚙️ Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [Docker](https://www.docker.com/) (Recommended for running DBs and MinIO)
- [PostgreSQL](https://www.postgresql.org/) & [MongoDB](https://www.mongodb.com/) (if not using Docker)

---

## 🚀 Installation & Setup

1.  **Clone the Repository**

    ```bash
    git clone https://github.com/medlaq777/GEDPro.git
    cd GEDPro
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory (refer to `.env.example` if available) and add:

    ```env
    # Application
    PORT=3000

    # Database (Postgres)
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=postgres
    DB_PASSWORD=root
    DB_DATABASE=gedpro

    # Database (MongoDB)
    MONGO_URI=mongodb://localhost:27017/gedpro

    # Security
    JWT_SECRET=super-secret-key

    # MinIO (Object Storage)
    MINIO_ENDPOINT=play.min.io
    MINIO_PORT=9000
    MINIO_ACCESS_KEY=minioadmin
    MINIO_SECRET_KEY=minioadmin
    MINIO_BUCKET=ged-documents

    # Google Calendar
    GOOGLE_PROJECT_ID=your-project-id
    GOOGLE_CLIENT_EMAIL=your-service-account-email
    GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n..."
    GOOGLE_CALENDAR_ID=primary
    ```

4.  **Run the Application**

    ```bash
    # Development mode
    npm run start:dev

    # Production mode
    npm run start:prod
    ```

---

## 📚 API Documentation

Once the application is running, access the interactive Swagger documentation at:

👉 **[http://localhost:3000/api](http://localhost:3000/api)**

---

## 📂 Project Structure

```bash
src/
├── core/                   # Core guards, interceptors, middlewares
├── modules/
│   ├── document-management # Uploads, OCR, MinIO
│   ├── form-builder        # Dynamic forms
│   ├── iam/                # Auth, Users, Roles
│   ├── integration/        # External services (Google Calendar)
│   ├── organization/       # Organization management
│   ├── recruitment/        # Candidates, Workflows
│   └── notification/       # Real-time alerts
├── main.ts                 # Application entry point
└── app.module.ts           # Root module
```

---

## 🧪 Running Tests

```bash
# Unit tests
npm run test

# Test coverage
npm run test:cov
```

---

## 📜 License

This project is licensed under the MIT License.
