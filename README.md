# Court Case Planner

This is a dependency-free browser prototype for planning court procedure across:

- Los Angeles County Superior Court
- California Court of Appeal
- Supreme Court of California
- U.S. Courts of Appeals
- Supreme Court of the United States

## What it does

- Generates a unique planner case ID for each matter
- Walks the user through a court-specific procedure track
- Prints a report with intake details, procedure steps, and official authority links
- Saves case outlines in browser local storage

## Files

- `index.html`: app shell
- `styles.css`: layout, flowchart, print styling
- `app.js`: route data, case ID generation, rendering, local storage

## Run it

Open `index.html` in a browser.

## Important limitation

This prototype uses a seeded authority bank, not a live legal research database. It is designed as a planning tool and content scaffold. Rule changes, filing mechanics, fee amounts, and local requirements must be checked against the linked official court sources before use in a real filing.

## Extending it

To add more procedure branches, edit `ROUTES` in `app.js`. Each route includes:

- `flow`: ordered procedure steps
- `checklist`: practical action items
- `authorities`: official citations and URLs
- `warnings`: validation cautions
- `researchPrompts`: topics for deeper legal research
