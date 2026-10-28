# STATUS — Free Privacy Letter Kit

## What was built

A fillable, printable freebies kit of opt-out letters, made by Asdale Dynamics, LLC.
Education only, not legal advice. Printable, no account needed. No tracking.

Files:
- `LICENSE` — MIT License, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`
- `README.md` — overview, how to use, education-only disclaimer, credit to Asdale Dynamics, LLC
- `.gitignore` — standard ignore rules (no secrets committed)
- `css/style.css` — shared screen + print CSS (`@media print` hides screen-only UI; `@page size: letter`)
- `print/index.html` — kit landing page linking to all three letters
- `print/ai-training-opt-out.html` — fillable letter asking AI companies not to train generative AI models on your content or personal data
- `print/data-broker-opt-out.html` — fillable letter asking data brokers/people-search sites to remove your personal information and stop selling it
- `print/marketing-email-opt-out.html` — fillable letter asking companies to stop marketing emails and honor a do-not-mail list
- `markdown/ai-training-opt-out.md` — Markdown source with bracketed fill-in fields
- `markdown/data-broker-opt-out.md` — Markdown source with bracketed fill-in fields
- `markdown/marketing-email-opt-out.md` — Markdown source with bracketed fill-in fields
- `STATUS.md` — this file

No account needed. No tracking. No secrets, API keys, or personal data (only placeholder examples). No `.github/workflows`.

## How to run

Open any HTML file directly in a browser (no build step, static HTML/CSS/Markdown):

```
print/index.html
print/ai-training-opt-out.html
print/data-broker-opt-out.html
print/marketing-email-opt-out.html
```

Type into the fields on screen, then print (Ctrl+P / Cmd+P) or save as PDF. Print styles hide buttons/headers automatically and size to US Letter. Markdown files are plain-text sources with [BRACKETED] fill-in fields; no build step required.

## Verification results

- All 4 HTML files parse as well-formed (Python `html.parser` check): **OK**
- All internal `href` targets resolve: **OK** (fixed `print/index.html` CSS link from `css/style.css` to `../css/style.css`)
- `LICENSE` copyright line is exactly `Copyright (c) 2026 Asdale Dynamics, LLC`: **OK**
- README credits Asdale Dynamics, LLC and includes education-only/not-legal-advice disclaimer: **OK**
- No `.github/workflows` directory: **OK**
- Secrets scan (sk-, API_KEY, SECRET_KEY, password=, AKIA, ghp_): no hits: **OK**
- No build step; pages are static HTML/CSS/Markdown.

## Known gaps

- No automated test suite (static site; validation done via parser check above)
- Print appearance not rendered to PDF visually; relies on `@media print` CSS (verified present, not rendered)
- Letters are templates, not legal documents; company opt-out processes and applicable laws vary — users must verify where to send each letter
- Markdown sources are not auto-generated from HTML; kept in sync manually
