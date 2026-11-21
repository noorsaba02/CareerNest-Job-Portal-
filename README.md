# Job Portal — Fresher Full-Stack Project

A simple Job Portal MVP using React + Spring Boot + Spring Data JPA + MySQL.
This is an interview-learning project, not a production-ready system.

## Features
- List jobs and search by title/location
- Add a job (recruiter demo)
- Apply to a job
- View applications for a job
- React UI calls Spring Boot REST APIs

## Requirements
- Java 17+
- Maven 3.8+
- Node.js 18+
- MySQL 8+

## 1) Create the database
In MySQL:
```sql
CREATE DATABASE job_portal;
```

## 2) Run backend
Edit `backend/src/main/resources/application.properties` with your MySQL username/password.
Then:
```bash
cd backend
mvn spring-boot:run
```
Backend: http://localhost:8080

## 3) Run frontend
In a second terminal:
```bash
cd frontend
npm install
npm run dev
```
Frontend: http://localhost:5173

## API endpoints
- `GET /api/jobs` — list jobs (optional query: `?keyword=java&location=india`)
- `GET /api/jobs/{id}` — job details
- `POST /api/jobs` — create job
- `POST /api/jobs/{id}/applications` — apply to job
- `GET /api/jobs/{id}/applications` — list applicants for job

Example create-job JSON:
```json
{
  "title": "Junior Java Developer",
  "company": "ABC Technologies",
  "location": "Bengaluru",
  "description": "Fresher role; Java and SQL basics."
}
```

Example application JSON:
```json
{
  "applicantName": "Your Name",
  "email": "you@example.com",
  "resumeUrl": "https://example.com/resume.pdf"
}
```

## Interview explanation (short)
"The Job Portal is a full-stack web application. React provides the user interface and sends HTTP requests to Spring Boot REST APIs. The controller receives requests, the service layer contains business logic, and the repository uses Spring Data JPA/Hibernate to store and retrieve job and application data from MySQL."

## Project limitations / next steps
This starter version has no real login, role authorization, resume upload, or production security. Explain that honestly in an interview. Those can be added after the core CRUD flow is understood.
