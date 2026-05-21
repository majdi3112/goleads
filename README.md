# GoLeads

Vergelijking en advies voor woningverbetering en energiebesparing.

Built with **Vite + React**.

## Scripts

```bash
npm install   # install dependencies
npm run dev   # start dev server
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
