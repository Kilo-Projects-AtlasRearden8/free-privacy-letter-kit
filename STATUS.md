# STATUS — Free Privacy Letter Kit

## What was built

A fillable, printable freebies kit of opt-out letters, made by Asdale Dynamics, LLC.
Education only, not legal advice. Printable, no account needed. No tracking.

Files:
- `LICENSE` — MIT License, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`
- `README.md` — overview, how to use, before-you-send tips, education-only disclaimer, credit to Asdale Dynamics, LLC
- `STATUS.md` — this file
- `.gitignore` — standard ignore rules (no secrets committed)
- `css/style.css` — shared screen + print CSS (`@media print` hides screen-only UI; `@page size: letter`)
- `js/letter-form.js` — zero-dependency script that mirrors typed form fields into the printable letter in real time, plus today's date default (graceful degrade: prints blank dotted lines for handwriting if JS is unavailable)
- `print/index.html` — kit landing page linking to all three letters, plus how-to, before-you-send, and about sections
- `print/ai-training-opt-out.html` — fillable letter asking AI companies not to train generative AI models on your content or personal data
- `print/data-broker-opt-out.html` — fillable letter asking data brokers/people-search sites to remove your personal information and stop selling it
- `print/marketing-email-opt-out.html` — fillable letter asking companies to stop marketing emails and honor a do-not-mail list
- `markdown/ai-training-opt-out.md`, `markdown/data-broker-opt-out.md`, `markdown/marketing-email-opt-out.md` — Markdown sources with bracketed fill-in fields

No account needed. No tracking. No secrets, API keys, or personal data (only placeholder examples). No `.github/workflows`.

## How to run

Open any HTML file directly in a browser (no build step, static HTML/CSS/Markdown):

```
print/index.html
print/ai-training-opt-out.html
print/data-broker-opt-out.html
print/marketing-email-opt-out.html
```

Fill in your details on screen — the printable letter below fills in as you type — then print (Ctrl+P / Cmd+P) or save as PDF. Sign and send per the company's instructions. Print without typing to get blank dotted lines for handwriting. Markdown files are plain-text sources; no build step required.

## Verification results

- All 4 HTML files parse as well-formed (Python `html.parser` check): **OK** for index.html, ai-training-opt-out.html, data-broker-opt-out.html, marketing-email-opt-out.html
- All internal `href` targets resolve: **OK**
- `js/letter-form.js` passes `node --check` syntax check: **OK**
- All 3 Markdown sources + README render without error (python-markdown): **OK**
- `LICENSE` copyright line is exactly `Copyright (c) 2026 Asdale Dynamics, LLC`: **OK**
- README credits Asdale Dynamics, LLC and includes education-only/not-legal-advice disclaimer: **OK**
- No `.github/workflows` directory: **OK**
- Secrets scan (sk-, API_KEY, SECRET_KEY, password=, AKIA, ghp_): no hits: **OK**
- No build step; pages are static HTML/CSS/Markdown.

## Known gaps

- No automated test suite (static site; validation done via the checks above)
- Print appearance not rendered to PDF visually; relies on `@media print` CSS (verified present, not rendered)
- Letters are templates, not legal documents; company opt-out processes and applicable laws vary — users must verify where to send each letter
- Markdown sources are not auto-generated from HTML; kept in sync manually
- Markdownlint style notes (line length, table pipes, list spacing) match the sibling reference kits' baseline and are not treated as failures
