# GoLeads

Vergelijking en advies voor woningverbetering en energiebesparing.

Built with **Vite + React**.

## Scripts

```bash
npm install   # install dependencies
npm run dev   # start dev server — open http://localhost:5173/goleads/
npm run build # production build (dist/)
npm run preview
```

## Deploy

Pushes to `main` are automatically deployed to GitHub Pages via the workflow in
`.github/workflows/deploy.yml`.

Live: https://majdi3112.github.io/goleads/

### Contactformulier (e-mail rechtstreeks naar info@goleads.be)

Een statische website kan zelf geen SMTP-mail versturen. Daarom gebruikt het formulier **[Web3Forms](https://web3forms.com)** (gratis tier): bij verzenden gaat er een beveiligde POST naar hun server en **zij bezorgen de mail bij info@goleads.be**.

1. Maak op [web3forms.com](https://web3forms.com) een access key aan en zet het ontvangstadres op **info@goleads.be**.
2. In GitHub: **Repository → Settings → Secrets and variables → Actions → New repository secret**
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Secret:** plak je Web3Forms access key
3. Push een commit naar `main` of start de workflow handmatig (**Actions → Deploy site to GitHub Pages → Run workflow**), zodat `npm run build` de key meeneemt.

Lokaal: kopieer `.env.example` naar `.env` en vul `VITE_WEB3FORMS_ACCESS_KEY=` in.

### Controleren of de key actief is

| Waar | Wat je moet zien |
|------|-------------------|
| **GitHub** → *Settings* → *Secrets and variables* → *Actions* | Een secret met exacte naam **`VITE_WEB3FORMS_ACCESS_KEY`** (hoofdletters, underscores zoals hier). |
| **GitHub** → *Actions* → laatste *Deploy site to GitHub Pages* → stap *Check Web3Forms secret* | Groene **notice** = key gezet; gele **warning** = key ontbreekt → secret toevoegen en workflow **opnieuw** draaien. |
| **Live site** | Geen melding meer *"E-mailverzending is nog niet geconfigureerd"* bij verzenden formulier. |

**Veelvoorkomende fout:** alleen in `.env` op je pc zetten helpt **niet** voor GitHub Pages: daar moet het **repository secret** staan, daarna opnieuw builden/deployen.
