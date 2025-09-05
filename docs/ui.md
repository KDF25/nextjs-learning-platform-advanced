# UI Layer (`src/shared/ui`)

## Overview

The `src/shared/ui` directory contains reusable user interface components, utilities, and styles used throughout the project. Components are organized by purpose and include both wrappers for third-party libraries (such as shadcn/ui) and custom solutions.

---

## Structure

- **custom-title/** — Custom-styled title component.
- **editor/** — Visual editor and related elements (toolbar, preview, etc.).
- **info-card-list/** — Informational cards with icons and descriptions.
- **lang-toggle/** — Language switcher component.
- **lesson-progress/** — Lesson progress indicator.
- **logo/** — Platform logo component.
- **shadcn-ui/** — Collection of UI components based on [shadcn/ui](https://ui.shadcn.com/), including buttons, modals, sidebar, tables, and more.
- **theme-toggle/** — Theme switcher (light/dark/system).
- **uploadthing/** — File upload components.
- **video-player/** — Video player component.

---

## Usage

Import required components from the main entry point:

```tsx
import { Button, Dialog, Sidebar } from "@/shared/ui";
```

Or from a specific folder:

```tsx
import { InfoCardList } from "@/shared/ui/info-card-list";
```

---

## Features

- **Reusability:** All components are designed for use across different parts of the application.
- **Responsiveness:** Most components support responsive layouts.
- **Internationalization:** Components support translations via next-intl.
- **Styling:** Uses Tailwind CSS and CSS variables for theming and customization.

---

## Extending

To add a new component:
1. Create a folder for your component inside `src/shared/ui`.
2. Implement the component and export it in `index.ts`.
3. Optionally, add documentation and usage examples to this file.

