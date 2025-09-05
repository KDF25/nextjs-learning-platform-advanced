## Database Structure and ORM

### Overview

This project uses **PostgreSQL** as the primary database and **Prisma ORM** for database schema management, migrations, and type-safe queries.  
Prisma models are defined in the `src/shared/database/prisma/` directory (typically in a `schema.prisma` file).

---

### Main Entities (Tables) and Relationships

Below is a summary table of the main database tables, their purposes, and key relationships.  
*Note: Table and column names are inferred from the project structure and common LMS patterns. For exact schema, see your `schema.prisma` file.*

| Table Name   | Purpose                                      | Key Columns / Relations                                                                 |
|--------------|----------------------------------------------|----------------------------------------------------------------------------------------|
| **User**     | Stores user accounts and roles               | `id`, `email`, `name`, `role` (student/teacher/admin), `createdAt`                     |
| **Course**   | Represents a course                          | `id`, `title`, `description`, `teacherId` (FK to User), `createdAt`                    |
| **Chapter**  | Logical sections within a course             | `id`, `title`, `courseId` (FK to Course), `order`, `createdAt`                         |
| **Lesson**   | Individual lessons within a chapter          | `id`, `title`, `chapterId` (FK to Chapter), `content`, `order`, `createdAt`            |
| **Enrollment** | Tracks which users are enrolled in courses | `id`, `userId` (FK to User), `courseId` (FK to Course), `enrolledAt`                   |
| **LessonProgress** | Tracks lesson completion per user      | `id`, `userId` (FK to User), `lessonId` (FK to Lesson), `completedAt`                  |
| **Payment**  | Stores payment transactions                  | `id`, `userId` (FK to User), `courseId` (FK to Course), `amount`, `status`, `createdAt`|

---

### Table Explanations

- **User**:  
  Stores all platform users, including students and teachers. The `role` column distinguishes user types.

- **Course**:  
  Each course is created by a teacher (`teacherId`). Contains metadata like title and description.

- **Chapter**:  
  Courses are divided into chapters for better organization. Each chapter belongs to a course.

- **Lesson**:  
  Chapters contain lessons. Each lesson has content and belongs to a chapter.

- **Enrollment**:  
  Many-to-many relationship between users and courses. Shows which users are enrolled in which courses.

- **LessonProgress**:  
  Tracks which lessons a user has completed, enabling progress tracking and dashboards.

- **Payment**:  
  Stores payment information for course purchases, including status and amount.

---

### Relationships Diagram (Textual)

- **User** 1---* **Session**
- **User** 1---* **Account**
- **User** 1---* **Course**
- **User** 1---* **Enrollment** *---1 **Course**
- **User** 1---* **LessonProgress** *---1 **Lesson** *---1 **Chapter** *---1 **Course**

---

### ORM: Prisma

- **Location:** `src/shared/database/prisma/`
- **Features:**
  - Type-safe database queries
  - Schema migrations
  - Easy relation mapping
  - Generates TypeScript types for models

## Database Models and Structure

This project uses **PostgreSQL** as the database and **Prisma ORM** for schema management and type-safe queries.  
All models are defined in [`src/shared/database/prisma/schema.prisma`](src/shared/database/prisma/schema.prisma).

---

### Models Overview

| Model             | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| User              | Platform users (students, teachers, admins)                                 |
| Session           | User sessions for authentication and tracking                               |
| Account           | Linked accounts for authentication providers                                |
| Verification      | Verification tokens for email/password reset flows                          |
| Course            | Courses created by users (teachers)                                         |
| Chapter           | Chapters within a course                                                    |
| Lesson            | Lessons within a chapter                                                    |
| Enrollment        | Tracks which users are enrolled in which courses                            |
| LessonProgress    | Tracks user progress for each lesson                                        |

---

### Model Details

#### User

| Field             | Type      | Description                                  |
|-------------------|-----------|----------------------------------------------|
| id                | String    | Primary key                                  |
| name              | String    | User's name                                  |
| email             | String    | User's email (unique)                        |
| emailVerified     | Boolean   | Email verification status                    |
| image             | String?   | Profile image URL                            |
| createdAt         | DateTime  | Creation timestamp                           |
| updatedAt         | DateTime  | Last update timestamp                        |
| stripeCustomerId  | String?   | Stripe customer ID (unique)                  |

**Relations:**  
- Has many `Session`, `Account`, `Course`, `Enrollment`, `LessonProgress`

---

#### Session

| Field      | Type      | Description                        |
|------------|-----------|------------------------------------|
| id         | String    | Primary key                        |
| expiresAt  | DateTime  | Expiry date                        |
| token      | String    | Session token (unique)             |
| createdAt  | DateTime  | Creation timestamp                 |
| updatedAt  | DateTime  | Last update timestamp              |
| ipAddress  | String?   | IP address                         |
| userAgent  | String?   | User agent string                  |
| userId     | String    | Linked user                        |

**Relations:**  
- Belongs to `User`

---

#### Account

| Field                  | Type      | Description                        |
|------------------------|-----------|------------------------------------|
| id                     | String    | Primary key                        |
| accountId              | String    | Provider account ID                |
| providerId             | String    | Provider name                      |
| userId                 | String    | Linked user                        |
| accessToken            | String?   | OAuth access token                 |
| refreshToken           | String?   | OAuth refresh token                |
| idToken                | String?   | OAuth ID token                     |
| accessTokenExpiresAt   | DateTime? | Access token expiry                |
| refreshTokenExpiresAt  | DateTime? | Refresh token expiry               |
| scope                  | String?   | OAuth scopes                       |
| password               | String?   | Password (if applicable)           |
| createdAt              | DateTime  | Creation timestamp                 |
| updatedAt              | DateTime  | Last update timestamp              |

**Relations:**  
- Belongs to `User`

---

#### Verification

| Field       | Type      | Description                        |
|-------------|-----------|------------------------------------|
| id          | String    | Primary key                        |
| identifier  | String    | Identifier (email, etc.)           |
| value       | String    | Verification value/token           |
| expiresAt   | DateTime  | Expiry date                        |
| createdAt   | DateTime? | Creation timestamp                 |
| updatedAt   | DateTime? | Last update timestamp              |

---

#### Course

| Field             | Type         | Description                        |
|-------------------|--------------|------------------------------------|
| id                | String       | Primary key (UUID)                 |
| title             | String       | Course title                       |
| description       | String       | Course description                 |
| imageUrl          | String       | Course image URL                   |
| imageKey          | String       | Image storage key                  |
| price             | Int          | Course price                       |
| duration          | Int          | Duration (minutes/hours)           |
| level             | CourseLevel  | Course level (enum)                |
| category          | String       | Course category                    |
| smallDescription  | String       | Short description                  |
| slug              | String       | Unique slug                        |
| status            | CourseStatus | Status (Draft/Published/Archived)  |
| createdAt         | DateTime     | Creation timestamp                 |
| updatedAt         | DateTime     | Last update timestamp              |
| userId            | String?      | Author (teacher)                   |

**Relations:**  
- Belongs to `User` (teacher)
- Has many `Chapter`, `Enrollment`

**Enums:**  
- `CourseLevel`: Beginner, Intermediate, Advanced  
- `CourseStatus`: Draft, Published, Archived

---

#### Chapter

| Field      | Type      | Description                        |
|------------|-----------|------------------------------------|
| id         | String    | Primary key (UUID)                 |
| title      | String    | Chapter title                      |
| position   | Int       | Order in course                    |
| createdAt  | DateTime  | Creation timestamp                 |
| updatedAt  | DateTime  | Last update timestamp              |
| courseId   | String?   | Linked course                      |

**Relations:**  
- Belongs to `Course`
- Has many `Lesson`

---

#### Lesson

| Field       | Type      | Description                        |
|-------------|-----------|------------------------------------|
| id          | String    | Primary key (UUID)                 |
| title       | String    | Lesson title                       |
| description | String?   | Lesson description                 |
| position    | Int       | Order in chapter                   |
| imageUrl    | String?   | Lesson image URL                   |
| imageKey    | String?   | Image storage key                  |
| videoUrl    | String?   | Video URL                          |
| videoKey    | String?   | Video storage key                  |
| chapterId   | String?   | Linked chapter                     |

**Relations:**  
- Belongs to `Chapter`
- Has many `LessonProgress`

---

#### Enrollment

| Field      | Type              | Description                        |
|------------|-------------------|------------------------------------|
| id         | String            | Primary key (UUID)                 |
| amount     | Int               | Payment amount                     |
| status     | EnrollmentStatus  | Status (Pending/Active)            |
| createdAt  | DateTime          | Creation timestamp                 |
| updatedAt  | DateTime          | Last update timestamp              |
| courseId   | String?           | Linked course                      |
| userId     | String?           | Linked user                        |

**Relations:**  
- Belongs to `Course`
- Belongs to `User`

**Enums:**  
- `EnrollmentStatus`: Pending, Active

---

#### LessonProgress

| Field      | Type      | Description                        |
|------------|-----------|------------------------------------|
| id         | String    | Primary key (UUID)                 |
| completed  | Boolean   | Completion status                  |
| createdAt  | DateTime  | Creation timestamp                 |
| updatedAt  | DateTime  | Last update timestamp              |
| userId     | String    | Linked user                        |
| lessonId   | String    | Linked lesson                      |

**Relations:**  
- Belongs to `User`
- Belongs to `Lesson`

---

### Notes

- All models use UUIDs or string IDs for primary keys.
- Timestamps (`createdAt`, `updatedAt`) are present for auditability.
- Enums are used for course level, course status, and enrollment status.
- Unique constraints are set for emails, slugs, and some composite keys (e.g., userId + courseId in Enrollment).

---

### ORM & Database

- **Database:** PostgreSQL
- **ORM:** Prisma
- **Schema location:** `src/shared/database/prisma/schema.prisma`
- **Migrations:** Managed via Prisma CLI

---

### How to Update the Schema

1. Edit the `schema.prisma` file.
2. Run `npx prisma migrate dev` to apply changes and generate new types.
3. Use generated Prisma Client in your code for type-safe queries.

---

### References

- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)