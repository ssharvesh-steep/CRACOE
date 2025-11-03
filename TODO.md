# TODO: Make CRACOE Logo Visible in Google Search

## Information Gathered
- Logo file exists as `cracoe-logo.png` in the root directory.
- References in code point to non-existent variants like `cracoe-logo-800w.png`.
- Image sitemap and HTML fallbacks use incorrect filenames.
- Logo is currently text-based in the top bar; no image logo visible on the page.
- Open Graph and structured data correctly reference `cracoe-logo.png`.

## Plan
- Update `image-sitemap.xml` to reference the correct logo filename `cracoe-logo.png`.
- Update video fallback in `index.html` to use `cracoe-logo.png`.
- Add a visible logo image in the top bar of `index.html` for better indexing and visibility.
- Update sitemap lastmod dates to current date.
- Ensure all references are consistent.

## Dependent Files to Edit
- `image-sitemap.xml`: Change logo references.
- `index.html`: Update video fallback and add visible logo.
- `main-sitemap.xml`: Update lastmod.
- `sitemap.xml`: Update lastmod.

## Followup Steps
- Test the site locally to ensure logo displays.
- Submit updated sitemap to Google Search Console.
- Monitor Google search results for logo visibility.
