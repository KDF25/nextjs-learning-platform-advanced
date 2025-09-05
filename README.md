# Learning Platform Advanced

A modern, full-featured learning management system (LMS) built with Next.js, PostgreSQL, Prisma, and a rich set of UI and developer tools.  
This platform supports multi-language content, PWA features, secure authentication, payments, and a modular, scalable architecture.

---

## Features

- **Modern UI:** Built with reusable components and Tailwind CSS
- **Internationalization:** Multi-language support with next-intl
- **Progressive Web App:** Offline support, installability, and caching
- **Authentication:** Secure login, OAuth, and session management
- **Payments:** Stripe integration for course purchases
- **Role-based Access:** Student and teacher dashboards
- **Scalable Architecture:** Feature-Sliced Design (FSD) and modular codebase
- **Database:** PostgreSQL with Prisma ORM
- **API:** RESTful endpoints and Next.js API routes

---

## Code Quality & Architecture

- **Feature-Sliced Design (FSD):**  
  The codebase is organized by features and layers, promoting separation of concerns, scalability, and maintainability.
- **Clear Folder Structure:**  
  - `entities/` for business logic and domain models  
  - `features/` for user scenarios and isolated actions  
  - `shared/` for reusable components, hooks, utilities, and configuration  
  - `widgets/` for composite UI blocks  
  - `page/` for page-level logic and routing  
  - `app/` for Next.js routing, layouts, and providers
- **Type Safety:**  
  TypeScript is used throughout the project, with strict typing for API, database, and UI.
- **Best Practices:**  
  - Modular code  
  - Reusable and composable components  
  - Clear separation between UI, logic, and data layers  
  - Environment variables and secrets are managed securely
- **Extensibility:**  
  The architecture allows for easy addition of new features, languages, and integrations.

**Overall, the codebase demonstrates a high level of organization, modern best practices, and readiness for scaling and team collaboration.**

---

## Getting Started

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**  
   See `.env` for required secrets and connection strings.
4. **Run database migrations**
   ```bash
   npm run prisma:migrate
   ```
5. **Start the development server**
   ```bash
   npm run dev
   ```

---

## Documentation

- [UI Components](./docs/ui.md)
- [Technical Architecture](./docs/architecture.md)
- [Database Models](./docs/db.md)
- [Internationalization (i18n)](./docs/i18n.md)
- [PWA & Offline Support](./docs/pwa.md)
- [SEO & Metadata](./docs/seo.md)
- [Deployment Guide](./docs/deployment.md)

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **PWA:** [next-pwa](https://github.com/shadowwalker/next-pwa)
- **Payments:** [Stripe](https://stripe.com/)
- **Authentication:** [better-auth](https://www.npmjs.com/package/better-auth), OAuth

---

## Folder Structure

- `src/` — Application source code
- `messages/` — Translation files for i18n
- `public/` — Static assets, PWA manifest, service worker
- `docs/` — Project documentation


