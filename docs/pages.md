# PAGES

This document provides an overview of all **application pages** with a short description of their purpose.  
For detailed information, see the individual files in the `pages/` folder.  

👉 To read more about a specific page, simply click on its path — the link will take you directly to the corresponding documentation file.

---

## Public Pages
- [`/`](./pages/home-page.md) — the landing page, entry point for all users.
- `/login` — login and registration page.
- [`/courses`](./pages/courses-page.md) — catalog of all available courses.
- [`/courses/[slug]`](./pages/courses-slug-page.md) — course details page with purchase/enrollment options.

---

## Payment Flow
- [`/payment/success`](./pages/courses-slug-page.md#payment) — confirmation page for successful payments.
- [`/payment/cancel`](./pages/courses-slug-page.md#payment) — page shown when a payment is canceled or fails.

---

## Student Dashboard
- [`/dashboard`](./pages/student-dashboard-page.md) — student dashboard with access to purchased courses.
- [`/dashboard/[slug]`](./pages/student-course-page.md) — course panel inside the dashboard (chapters and lessons).

---

## Teacher Dashboard
- [`/teacher`](./pages/teacher-dashboard-page.md) — teacher panel, general overview.
- [`/teacher/courses`](./pages/teacher-courses-page.md) — list of courses created by the teacher.
- [`/teacher/courses/create`](./pages/teacher-course-create-page.md) — form to create a new course.
- [`/teacher/courses/[courseId]/edit`](./pages/teacher-course-edit-page.md) — edit course details (title, description, settings).
