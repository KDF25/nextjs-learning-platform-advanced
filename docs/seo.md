# SEO Guide

This project is optimized for search engines and social media sharing using modern Next.js features and best practices.

---

## Key SEO Features

- **Dynamic Metadata:**  
  Each page and locale generates unique `<title>`, `<meta name="description">`, and other meta tags using Next.js App Router's `generateMetadata` function.

- **Open Graph & Twitter Cards:**  
  Social sharing tags (`og:title`, `og:description`, `og:image`, `twitter:card`, etc.) are set for rich previews on Facebook, Twitter, and other platforms.

- **Canonical & Hreflang:**  
  Canonical URLs and alternate language links (`hreflang`) are generated for all supported locales, helping search engines understand language versions and avoid duplicate content.

- **Sitemap:**  
  Sitemap is generated automatically via `src/app/sitemap.ts` and is available at `/sitemap.xml`.

- **robots.txt:**  
  Configured in `public/robots.txt` to allow indexing of all main pages and block service routes. The sitemap URL is also specified.

- **Manifest & Icons:**  
  PWA manifest and icons are provided for better indexing and device support.

---

## Example Metadata Configuration

Metadata is generated dynamically in `[locale]/layout.tsx`:

```tsx
export async function generateMetadata(props) {
  // ...localization logic...
  return {
    title: {
      default: t("title"),
      template: `%s | ${t("siteName")}`
    },
    description: t("description"),
    keywords: t("keywords"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      images: [{ url: "https://your-domain.com/images/og-image.jpg" }]
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["https://your-domain.com/images/og-image.jpg"]
    },
    alternates: {
      canonical: "https://your-domain.com",
      languages: {
        en: "https://your-domain.com/en",
        ru: "https://your-domain.com/ru"
      }
    }
  };
}
```

---

## Best Practices Used

- **Unique meta tags for each page and locale**
- **Absolute URLs for Open Graph and Twitter images**
- **Localized titles and descriptions**
- **Sitemap and robots.txt always up to date**
- **Accessibility and semantic HTML in UI components**

---

## Recommendations

- Always provide meaningful `alt` attributes for images.
- Use semantic HTML tags (`<main>`, `<nav>`, `<header>`, `<footer>`) for better accessibility and SEO.
- Keep Open Graph and Twitter images up to date and relevant.
- Regularly check your site with [Lighthouse](https://web.dev/measure/) and [Google Search Console](https://search.google.com/search-console/about).

---

## References

- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)