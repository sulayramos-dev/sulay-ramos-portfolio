# CRM / Operations Platform

## Korte samenvatting

Server-side app-suite voor multi-office operations, risk governance, wallet/treasury verwerking en auditbare transactiestromen.

## Case context

Probleem:

- Loterij- en gamingorganisaties gebruiken vaak losse spreadsheets, lokale databases, WhatsApp-processen en afzonderlijke systemen voor verkoop, risico en uitbetalingen.
- Hierdoor ontbreekt een centrale bron van waarheid voor verkoop, exposure, treasurypositie en operationele werkvoorraad.
- High-stake tickets, settlements, payouts en risk-routing vragen om auditbare verwerking in plaats van handmatige communicatie.

Oplossing:

- Multi-application suite met Player Office, Front Office, Back Office en Main Office.
- Hub-based processing model voor operationele verwerking via Back Office, Main Office en externe bond-flow.
- Centrale Risk Engine voor accepteren, limiteren, blokkeren, intern behouden en doorzetten naar hogere risicolaag.
- Wallet & Treasury platform met journal-first balances, immutable ledger, double-entry accounting, settlements, payouts en reversals.
- Payment lifecycle met statussen zoals draft, pending, confirmed, failed, reversed en disputed.

Technische keuzes:

- Vanilla JavaScript frontend met component-based UI.
- Multi-application architecture en shared design system.
- Node.js, Express en REST API architecture.
- PostgreSQL met immutable journal model, replayable ledger architecture, risk snapshots en audit trails.
- Server-side orchestration en event-driven processing.

Jouw bijdrage:

- End-to-end platformarchitectuur ontworpen.
- Multi-office governance en hub-based processing model ontwikkeld.
- Risk- en treasuryarchitectuur opgezet.
- Centrale Risk Engine, wallet/ledgerplatform en payment lifecycle ontworpen.
- Frontend, backend, Data Management Centers, Main Office hub-2 workflow en reporting gerealiseerd.

Resultaat:

- Centrale server-side bron van waarheid.
- Multi-organisatie platformarchitectuur.
- Realtime risk-governance.
- Journal-first financieel platform.
- Auditbare en replaybare transactiestromen.
- Sterke demonstratie van enterprise architectuur, productontwikkeling, operations en full-stack engineering.

## Screenshots

Gebruikt in de UI:

- `01-player-results-redacted.webp` - Player Office resultaten en payout flow.
- `02-front-office-wallet-redacted.webp` - Front Office wallet en weekafrekening.
- `03-main-office-wallet-redacted.webp` - Main Office treasurypositie en organisatiebreed kanaaloverzicht.
- `04-week-insights-redacted.webp` - Week insights en risk/treasury performance.

Nog aanbevolen als later beschikbaar:

- Back Office Data Management Center.
- Main Office Data Management Center.
- Risk Engine en exposure management.
- External bond workflow.
- Architectuurdiagram van Player Office / Front Office / Back Office / Main Office / External Bond.

Originelen worden buiten de publiceerbare portfolio-map bewaard in:

- `case-sources-private/04-crm-systeem/screenshots-originals/`
- `case-sources-private/04-crm-systeem/context-originals/CRM systeem.txt`

## Niet publiek delen

- Klantnamen
- E-mailadressen, telefoonnummers en adressen
- Interne notities
- Factuur-, order- of contractnummers
- IDs, tokens of integratiegegevens
- Productie-URL's
- Risk-capaciteiten en limieten
- Financiele testdata
- Externe verzekeringspartijen
