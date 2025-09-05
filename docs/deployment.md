# Deployment Guide

This document describes how to deploy the Learning Platform Advanced project and configure environment variables.

---

## Deployment Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/KDF25/nextjs-learning-platform-advanced.git
   cd learning-platform-advanced
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   - Copy the `.env` file template (or create a new `.env` file) in the project root.
   - Fill in all required secrets and connection strings (see [Environment Variables](#environment-variables) below).

4. **Run Database Migrations**
   ```bash
   npm run prisma:migrate
   ```

5. **Build the Project**
   ```bash
   npm run build
   ```

6. **Start the Application**
   ```bash
   npm start
   ```

   The app will be available at the URL specified in `NEXT_PUBLIC_APP_URL`.

---

## Environment Variables

All sensitive data and configuration are managed via the `.env` file in the project root.  
**Never commit your `.env` file to version control!**

| Variable Name           | Description                                              |
|------------------------ |---------------------------------------------------------|
| BETTER_AUTH_SECRET      | Secret key for authentication (Better Auth)             |
| BETTER_AUTH_URL         | Base URL for authentication endpoints                   |
| DATABASE_URL            | PostgreSQL connection string (used by Prisma)           |
| GITHUB_CLIENT_ID        | GitHub OAuth client ID                                  |
| GITHUB_CLIENT_SECRET    | GitHub OAuth client secret                              |
| UPLOADTHING_TOKEN       | Token for file uploads (UploadThing)                    |
| STRIPE_SECRET_KEY       | Stripe API secret key                                   |
| NEXT_PUBLIC_APP_URL     | Public URL of your deployed application                 |
| STRIPE_WEBHOOK_SECRET   | Stripe webhook signing secret                           |

**Example `.env` file:**
```env
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=https://your-domain.com

DATABASE_URL=postgresql://user:password@host:port/dbname?sslmode=require

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

UPLOADTHING_TOKEN=your_uploadthing_token

STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_APP_URL=https://your-domain.com
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

---

## Notes

- **Production:**  
  - Always use secure, unique secrets and production database credentials.
  - Set `NEXT_PUBLIC_APP_URL` to your real production domain.
  - Ensure your database and all third-party services are accessible from your deployment environment.

- **PWA & HTTPS:**  
  - For PWA features and service workers to work, your app must be served over HTTPS (except on localhost).

- **Migrations:**  
  - Run migrations after each schema change to keep your database up to date.

---

## Useful Links

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [UploadThing Documentation](https://docs.uploadthing.com/)