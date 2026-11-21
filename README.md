
# 💼 CareerNest - Job Portal Web Application

![Status](https://img.shields.io/badge/Status-In%20Progress-orange)
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB)
![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot%203.3.5-6DB33F)
![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1)

---

## 📌 Project Overview

**Project Name:** CareerNest - Job Portal

**Description:** CareerNest is a full-stack web application where job seekers can search for jobs and employers can post job listings. The React frontend communicates with a Spring Boot REST API, which stores data in MySQL using Spring Data JPA and Hibernate.

**Goal:** To build a clean, layered full-stack application while learning Spring Boot, REST APIs, database integration, and React development.

> 🚧 **Status:** In Progress. Authentication and additional features are being developed and tested.

---

## ✨ Features

### ✅ Completed

1. Search jobs by **keyword**
2. Search jobs by **location**
3. Employers can **post job listings**
4. React forms connected to backend APIs
5. Input validation using `@NotBlank` and `@Email`
6. Centralized exception handling using `@ControllerAdvice`
7. CORS configured for React and Spring Boot communication
8. Job application functionality
9. View applications submitted for a job
10. Prevent duplicate applications using email validation

### 🔄 In Progress

1. User registration and login
2. Spring Security integration
3. JWT-based authentication
4. Password encryption using BCrypt
5. Role-based authorization and security testing

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, JavaScript, HTML5, CSS3 |
| **Backend** | Java, Spring Boot 3.3.5, Spring Web, Spring Security, Maven |
| **Database** | MySQL, Spring Data JPA, Hibernate |
| **Authentication** | JWT, BCrypt, Spring Security (implementation in progress) |
| **Tools** | Git, GitHub, Postman, VS Code, Eclipse |

---

## 🏗️ Backend Architecture

The backend follows a **layered architecture**:

```text
Controller  ->  Service  ->  Repository  ->  MySQL
(requests)     (logic)      (data access)    (database)
```

- **Controller layer:** Handles HTTP requests and responses using `@RestController`, `@GetMapping`, and `@PostMapping`.
- **Service layer:** Contains business logic using `@Service`.
- **Repository layer:** Handles database operations using `JpaRepository`, derived queries, and JPQL `@Query`.
- **Model / Entity layer:** Maps Java classes to database tables using `@Entity`, `@Id`, and `@ManyToOne`.
- **Security layer:** Contains JWT services, authentication filters, and Spring Security configuration.

---

## 📁 Project Structure

```text
CareerNest-Job-Portal/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/jobportal/
│   │       │   ├── controller/
│   │       │   ├── service/
│   │       │   ├── repository/
│   │       │   ├── model/
│   │       │   └── security/
│   │       │
│   │       └── resources/
│   │           └── application.properties
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   └── style.css
│   │
│   ├── public/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🔄 How It Works (Request Flow)

1. The user enters a keyword (for example, "Java") in the React search box.
2. React sends a `GET` request to the Spring Boot REST API.
3. The **Controller** receives the request and passes it to the **Service**.
4. The **Service** processes the business logic and calls the **Repository**.
5. **Hibernate** converts database operations into SQL queries and executes them in MySQL.
6. The results are returned as JSON.
7. React receives the response and displays the job listings.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/jobs` | Get all jobs |
| GET | `/api/jobs/search?keyword=Java` | Search jobs by keyword |
| GET | `/api/jobs/search?location=Bangalore` | Search jobs by location |
| POST | `/api/jobs` | Post a new job |
| POST | `/api/jobs/{id}/applications` | Apply for a job |
| GET | `/api/jobs/{id}/applications` | View applications for a job |
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | User login |

---

## 🚀 How to Run

### Prerequisites

- Java 17 or later
- Node.js and npm
- MySQL Server
- Apache Maven

### 1. Clone the Repository

```bash
git clone https://github.com/noorsaba02/CareerNest-Job-Portal.git
cd CareerNest-Job-Portal
```

### 2. Set Up the Database

Open MySQL and create the database:

```sql
CREATE DATABASE job_portal;
```

Make sure your MySQL server is running.

Configure the following environment variables before starting the backend:

- `DB_PASSWORD` = Your MySQL password
- `JWT_SECRET` = Your Base64-encoded JWT secret key

Do not upload real passwords or secret keys to GitHub.

### 3. Run the Backend (Spring Boot)

Open a terminal:

```bash
cd backend
mvn spring-boot:run
```

The backend API runs at:

`http://localhost:8080`

### 4. Run the Frontend (React)

Open a **second terminal**:

```bash
cd frontend
npm install
npm run dev
```

The frontend application runs at:

`http://localhost:5173`

---

## 📸 Screenshots

### Home Page

<img width="1197" height="640" alt="CareerNest Home Page" src="https://github.com/user-attachments/assets/7559db19-e9cd-4fd0-a24b-bba398738f00" />

### Job Search

<img width="1073" height="357" alt="CareerNest Job Search" src="https://github.com/user-attachments/assets/b8b2eb26-8df6-483e-8f61-a547abcf0e69" />

<img width="360" height="615" alt="CareerNest Job Search Results" src="https://github.com/user-attachments/assets/59f894fa-f05d-4d34-888c-422c20a400ac" />

### Application / Login Details

<img width="960" height="531" alt="CareerNest Application Details" src="https://github.com/user-attachments/assets/03190787-d93d-410c-98d0-da2ab84aef08" />

---

## 📚 What I Learned

- Building REST APIs using Spring Boot.
- Understanding Dependency Injection and Inversion of Control.
- Implementing layered architecture (Controller, Service, Repository).
- Database mapping using Spring Data JPA and Hibernate.
- Creating custom repository methods and JPQL queries.
- Connecting a React frontend with a Spring Boot backend.
- Handling CORS configuration and API integration.
- Implementing input validation and centralized exception handling.
- Learning Spring Security, JWT authentication, and BCrypt password encryption.

---

## 👩‍💻 Author

**Noor Saba**

Java Full Stack Developer | Bangalore, India

[LinkedIn](https://linkedin.com/in/noor-saba-2a2599313) • [GitHub](https://github.com/noorsaba02) • noorsaba02003@gmail.com
