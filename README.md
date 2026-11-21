# 💼 CareerNest - Job Portal Web Application

![Status](https://img.shields.io/badge/Status-In%20Progress%20(~75%25)-orange)
![React](https://img.shields.io/badge/Frontend-React.js-61DAFB)
![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot%203.3.5-6DB33F)
![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1)

---

## 📌 Project Overview

**Project Name:** CareerNest - Job Portal

**Description:** CareerNest is a full-stack web application where job seekers can search for jobs and employers can post job listings. The React frontend talks to a Spring Boot REST API, which stores data in MySQL using Spring Data JPA and Hibernate.

**Goal:** To build a clean, layered full-stack application while learning Spring Boot, REST APIs and React integration.

> 🚧 **Status:** In progress (~75% complete). I am still learning and adding features.

---

## ✨ Features

### ✅ Completed
1. Search jobs by **keyword**
2. Search jobs by **location**
3. Employers can **post job listings**
4. React forms connected to backend APIs
5. Input validation (`@NotBlank`, `@Email`)
6. Centralized exception handling (`@ControllerAdvice`)
7. CORS configured for React and Spring Boot communication

### 🔄 In Progress / Planned
1. [Your next feature, e.g. authentication / login]
2. [e.g. apply for a job flow]
3. [e.g. update and delete job APIs]

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React.js, JavaScript, HTML5, CSS3 |
| **Backend** | Java, Spring Boot 3.3.5, Spring Web, Maven |
| **Database** | MySQL, Spring Data JPA, Hibernate |
| **Tools** | Git, GitHub, Postman, VS Code, Eclipse |

---

## 🏗️ Backend Architecture

The backend follows a **layered architecture**:

```
Controller  ->  Service  ->  Repository  ->  MySQL
(requests)     (logic)      (data access)    (database)
```

- **Controller layer:** handles HTTP requests and responses (`@RestController`, `@GetMapping`, `@PostMapping`)
- **Service layer:** business logic (`@Service`)
- **Repository layer:** database access using `JpaRepository`, derived queries and JPQL `@Query`
- **Model / Entity layer:** maps Java classes to tables (`@Entity`, `@Id`, `@ManyToOne`)

---

## 📁 Project Structure

```
CareerNest/
├── backend/
│   ├── src/main/java/.../
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── model/
│   │   └── exception/
│   ├── src/main/resources/
│   │   └── application.properties.example
│   └── pom.xml
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── screenshots/
├── .gitignore
└── README.md
```

> Edit the folder names above to match your actual project.

---

## 🔄 How It Works (Request Flow)

1. The user enters a keyword (e.g. "Java") in the React search box.
2. React sends a `GET` request to the Spring Boot API.
3. The **Controller** receives it and passes it to the **Service**.
4. The **Service** calls the **Repository**.
5. **Hibernate** converts the query to SQL and runs it on **MySQL**.
6. Results return as JSON and React displays the job list.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/jobs` | Get all jobs |
| GET | `/api/jobs/search?keyword=Java` | Search jobs by keyword |
| GET | `/api/jobs/search?location=Bangalore` | Search jobs by location |
| POST | `/api/jobs` | Post a new job |

> Replace these with your real endpoints.

---

## 🚀 How to Run

### Prerequisites
- Java 17+
- Node.js and npm
- MySQL
- Maven

### 1. Clone the repository
```bash
git clone https://github.com/noorsaba02/CareerNest.git
cd CareerNest
```

### 2. Set up the database
1. Open MySQL and create a database:
   ```sql
   CREATE DATABASE careernest;
   ```
2. In `backend/src/main/resources/`, copy `application.properties.example` to `application.properties` and add your own MySQL username and password.

### 3. Run the backend
```bash
cd backend
mvn spring-boot:run
```
The API runs on `http://localhost:8080`.

### 4. Run the frontend
```bash
cd frontend
npm install
npm start
```
The app runs on `http://localhost:3000`.

---

## 📸 Screenshots

### Home Page
<img width="1197" height="640" alt="Screenshot 2026-11-21 004418" src="https://github.com/user-attachments/assets/7559db19-e9cd-4fd0-a24b-bba398738f00" />


### Job Search
<img width="1073" height="357" alt="Screenshot 2026-11-21 004437" src="https://github.com/user-attachments/assets/b8b2eb26-8df6-483e-8f61-a547abcf0e69" />

<img width="360" height="615" alt="Screenshot 2026-11-21 004558" src="https://github.com/user-attachments/assets/59f894fa-f05d-4d34-888c-422c20a400ac" />

### logging details
<img width="960" height="531" alt="Screenshot 2026-11-21 004637" src="https://github.com/user-attachments/assets/03190787-d93d-410c-98d0-da2ab84aef08" />


---

## 📚 What I Learned
- Building REST APIs with Spring Boot
- Dependency Injection and Inversion of Control
- Layered architecture (Controller, Service, Repository)
- Database mapping with JPA and Hibernate
- Connecting a React frontend to a Spring Boot backend (CORS, API integration)

---

## 👩‍💻 Author

**Noor Saba**
Java Full Stack Developer | Bangalore, India

[LinkedIn](https://linkedin.com/in/noor-saba-2a2599313) • [GitHub](https://github.com/noorsaba02) • noorsaba02003@gmail.com
