# Specification

## Summary
**Goal:** Fix the Careers page so it always scrolls to the top when navigated to from any other page.

**Planned changes:**
- Add a `useEffect` hook in `CareersPage.tsx` that calls `window.scrollTo(0, 0)` on component mount.

**User-visible outcome:** Clicking the Careers link from any page will always bring the user to the top of the Careers page.
