# Elegante Bespoke

Elegante Bespoke is a React and Vite website for media walls, bespoke carpentry, fitted furniture, and Venetian plaster finishes.

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run preview` previews the production build locally.
- `npm run lint` runs ESLint.

## Deployment

The site is configured for Hostinger at:

https://elegantebespoke.co.uk/

Build the production files with:

```bash
npm run build
```

Upload the contents of the `dist` folder to Hostinger's `public_html` directory.

If using Hostinger's Git deployment, use:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
