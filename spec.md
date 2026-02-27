# Specification

## Summary
**Goal:** Add JobPosting JSON-LD structured data markup to the CareersPage component so search engines can index job postings.

**Planned changes:**
- Inject a `<script type="application/ld+json">` block containing a valid `schema.org/JobPosting` object into the `CareersPage` component

**User-visible outcome:** Search engines can discover and index job postings from the Careers page via structured data; no visible UI changes occur.
