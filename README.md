# Portfolio Website

This is a portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## First-Time Setup on Another Computer

1. Check whether Node.js is already installed.

   Open a terminal and run:

   ```bash
   node -v
   npm -v
   ```

   If both commands show version numbers, Node.js is already installed.

   If the Node.js version is older than 20, update Node.js before continuing.

2. If Node.js is not installed or is older than version 20, install/update it.

   Go to:

   ```text
   https://nodejs.org
   ```

   Download and install the LTS version.

   Recommended version: Node.js 20 or newer.

3. After installation, check the versions again:

   ```bash
   node -v
   npm -v
   ```

4. Open a terminal in the project folder.

5. Install project dependencies:

   ```bash
   npm install
   ```

6. Start the local development server:

   ```bash
   npm run dev
   ```

7. Open the website in a browser:

   ```text
   http://localhost:3000
   ```

## Useful Commands

Run the website locally:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm run start
```

## Deploying to GitHub Pages (`username.github.io`)

This project is already configured for a GitHub Pages user site:

```text
https://username.github.io/
```

To use it:

1. Create a GitHub repository named exactly:

   ```text
   username.github.io
   ```

2. Push this project to that repository:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. In GitHub, open `Settings -> Pages` and choose `GitHub Actions` as the source.

4. After the workflow finishes, the site should appear at:

   ```text
   https://username.github.io/
   ```

5. For future updates:

   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```

   Every push to `main` will automatically rebuild and redeploy the site.

## Editing Website Content

Most website content is separated into files under:

```text
src/content/
```

This makes it easier to update the professor's information without digging through page layout code.

## Content File Map

Home page:

```text
src/content/home/about.ts
src/content/home/education.ts
src/content/home/work-experience.ts
src/content/home/contact.ts
```

Main site information and navigation:

```text
src/content/site.ts
```

Publications:

```text
src/content/publications/index.ts
```

Lab:

```text
src/content/lab/overview.ts
```

Honors and Awards:

```text
src/content/honors-awards/awards.ts
```

Services:

```text
src/content/services/services.ts
```

Teaching:

```text
src/content/teaching/courses.ts
```

Outreach:

```text
src/content/outreach/activities.ts
```

## Adding Publication PDFs

Put PDF files here:

```text
public/publications/pdfs/
```

Then reference the PDF filename in:

```text
src/content/publications/index.ts
```

Example:

```ts
{
  title: "Example Publication Title",
  authors: "Samia Tasnim",
  details: "Conference or journal details.",
  link: "https://example.com/publication",
  pdfFile: "example-publication.pdf",
}
```

If there is no external link or PDF yet, leave `link` or `pdfFile` out.

## Editing Page Layout

The page files live in:

```text
src/app/
```

Examples:

```text
src/app/page.tsx
src/app/publications/page.tsx
src/app/lab/page.tsx
src/app/honors-and-awards/page.tsx
src/app/services/page.tsx
src/app/teaching/page.tsx
src/app/outreach/page.tsx
```

Shared visual components live in:

```text
src/components/
```

Global styling lives in:

```text
src/app/globals.css
```

## Notes

- Home is a scrollable one-page profile
- Other navigation tabs are separate pages
- The header/navigation is shared across pages.
- Card shadow styling is centralized in `src/app/globals.css`.
- Google Fonts are used through Next.js, so the first build may need internet access.
