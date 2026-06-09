# OASE Innovatieplatform

## Korte samenvatting

OASE is een role-based innovatieplatform waarmee medewerkers ideeen kunnen indienen, managers kunnen beoordelen en organisaties voortgang centraal kunnen monitoren. De applicatie digitaliseert het innovatieproces van intake tot teamtoewijzing, collectiebeheer en analytics.

## Case context

Probleem:

- Innovatie- en verbeterideeen raken versnipperd over e-mail, spreadsheets en losse initiatieven.
- Er ontbreekt end-to-end zicht op kwaliteit, eigenaarschap, status en impact.
- Management heeft stuurinformatie nodig voor prioritering, portfolio-overzicht en opvolging.

Oplossing:

- Centrale intakeflow voor operationele en strategische ideeen.
- Role-based toegang voor employee, manager en admin.
- Team-, department-, collectie- en comment-workflows.
- Dashboards en analytics voor status, trends, activiteit en locatie-inzichten.
- Frontend/API-scheiding met JWT-authenticatie en OAuth-flow.

Technische keuzes:

- React 18, TypeScript, Vite en React Router.
- Tailwind CSS, Lucide Icons, Framer Motion en AG Grid.
- React Hook Form en Zod voor formulierlogica en validatie.
- REST API-koppelingen via configureerbare API-base URL.
- JWT Bearer Auth en Google OAuth redirectflows.
- Azure-geschikte opzet met omgevingsgestuurde configuratie.

Jouw bijdrage:

- End-to-end frontend en functionele architectuur ontworpen.
- Role-based autorisatie en afgeschermde routes geimplementeerd.
- Intakeflow, dashboardmodules, teammanagement en governance-workflows gebouwd.
- API-integratie gerealiseerd voor authenticatie, gebruikers, ideeen, teams, collecties, comments en locaties.
- Build-, lint- en kwaliteitscontroles ingericht voor stabiele releasecycli.

Resultaat:

- Centrale en auditeerbare werkwijze voor innovatiebeheer.
- Betere traceerbaarheid, eigenaarschap en besluitvorming.
- Sterke demonstratie van full-stack productdenken, enterprise UX en API-first architectuur.

## Screenshots

Gebruikt in de UI:

- `01-oase-role-selection.webp` - Role-based entry flow voor manager en team member.
- `02-oase-information-architecture.webp` - Conceptueel model voor innovatiedomeinen.
- `03-oase-innovation-wheel.webp` - Visuele taxonomy voor innovatie-intake en categorisatie.

Originelen bewaard buiten de publiceerbare portfolio-map:

- `case-sources-private/03-oase-innovatieplatform/screenshots-originals/`
- `case-sources-private/03-oase-innovatieplatform/context-originals/OASE.txt`

Nog aanbevolen als later beschikbaar:

- Dashboard met KPI's en statusverdeling.
- Idee-detailpagina met status, comments en eigenaarschap.
- Intakeformulier met conditionele validatie.
- Teammanagement/departments-flow.
- Analytics of locatie-inzichten.

## Niet publiek delen

- Persoonsgegevens
- Testdata die echt lijkt of herleidbaar is
- Tokens, API URLs of interne endpoints
- Directe demo-IP-adressen
- Niet-geanonimiseerde gebruikersnamen of organisaties
