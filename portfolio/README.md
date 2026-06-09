# Sulay Ramos Portfolio

Static-first portfolio voor full-stack development, AI-native werken, procesanalyse, projecten en praktische automation.

## Lokaal openen

Open `index.html` direct in de browser, of start een simpele lokale server:

```powershell
cd C:\Users\Admin-01\Documents\CV\portfolio
node server.mjs
```

Daarna is de site beschikbaar op `http://localhost:4173`.

## Structuur

- `index.html` - portfolio pagina
- `styles.css` - responsive styling
- `script.js` - skill filters en contactactie
- `data/profile.json` - single source of truth
- `assets/` - geoptimaliseerde profielfoto's
- `cases/` - per case context, screenshots en redactie-notities
- `privacy-review.md` - publicatiecontrole

## Deployment

Publiceer alleen de inhoud van deze `portfolio/` map. Upload niet de bovenliggende `CV` map, omdat daar private bronbestanden en originele case-context naast de publieke site kunnen staan.

Netlify en Vercel kunnen deze repository als static site deployen:

- build command: leeg laten
- publish/output directory: `.`
