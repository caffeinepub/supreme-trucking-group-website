# Specification

## Summary
**Goal:** Add a JobPosting JSON-LD structured data block to the CareersPage so search engines can index the job listing.

**Planned changes:**
- In `frontend/src/pages/CareersPage.tsx`, inject a `<script type="application/ld+json">` tag via `dangerouslySetInnerHTML` containing a valid schema.org `JobPosting` object with fields: `@context`, `@type`, `title` (Class A CDL Team Driver – OTR Refrigerated), `hiringOrganization` (Supreme Trucking / supremeltl.com), `jobLocation` (United States/nationwide), `datePosted`, `baseSalary` (CPM pay structure), and `applicationContact` (phone 201-838-0000 ext. 1, email recruiting@supremeltl.com).
- No other files, components, pages, styles, or backend logic are modified.

**User-visible outcome:** The `/careers` page DOM will contain a hidden JSON-LD script block that enables search engines to display the job posting as a rich result, with no visible changes to the page layout or content.
