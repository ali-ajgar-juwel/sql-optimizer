# QueryPilot — SQL Optimizer & Index Advisor

A browser-only frontend application built with HTML5, CSS3, vanilla JavaScript (ES6+) and Tailwind CSS utilities.

## Run
1. Extract the `QueryPilot.zip` archive.
2. Open `QueryPilot/index.html` in a modern browser.
3. For Tailwind CDN and web fonts, an internet connection is needed. The custom CSS and application logic are local.
4. Use the seeded demo workspace. Changes persist in IndexedDB (with localStorage fallback).

No build step, Node.js, server, or package installation is required.

## Implemented
- Responsive SaaS shell with sidebar navigation and mobile menu.
- Dashboard trend chart, query health, prioritized signals, activity and recommendations.
- Projects: create, edit, select, delete; project member viewer.
- Demo connection profiles: create, edit, delete, select and test-mode feedback.
- SQL workspace: sample query loading, format, basic validation, save/delete, analysis.
- Heuristic optimizer rules: SELECT *, missing WHERE, JOIN review, column functions, leading wildcard LIKE, nested SELECT, OR predicates, unbounded SELECT.
- Index advisor with candidate rationale and generated CREATE/DROP SQL preview.
- Expandable illustrative execution-plan tree.
- Security Center heuristic checks for tautologies, concatenation indicators, destructive SQL, sensitive-looking columns and comment markers.
- Performance Lab with clearly labeled simulated benchmark comparisons and experiment creation.
- Reports/history, CSV export and printable report export (browser print dialog can save as PDF).
- Database explorer with editable sample schema metadata.
- Browser persistence, profile settings, reset-demo-data, toast notifications and dialogs.

## Important boundaries
This is a frontend-only academic demonstration:
- It does **not** connect to PostgreSQL or execute SQL.
- Connection manager entries are demo profiles only. Do not enter real passwords.
- Authentication is a local demo state, not secure production authentication.
- Query analysis and security scanning are heuristics, not complete parsers or audits.
- Execution plan nodes are illustrative, not actual PostgreSQL EXPLAIN output.
- Benchmark values are simulated; estimated cost is not execution time.
- Index recommendations are hypotheses. No index is created or dropped automatically.
- SQL rewrites are suggestions and are not guaranteed semantically equivalent.
- CSV export is generated locally. Report export opens a print-friendly report; choose “Save as PDF” in the browser.

## Suggested production evolution
Add a trusted backend API, secure authentication/session management, encrypted secret storage, role-based access, PostgreSQL connection pooling, server-side query validation, EXPLAIN/EXPLAIN ANALYZE collection, workload capture, and controlled benchmark execution.
