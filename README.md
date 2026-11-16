# Movie World

A React and Vite movie finder powered by the OMDb API.

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Request a free API key from [OMDb](https://www.omdbapi.com/apikey.aspx).

3. Create `.env.local` from `.env.example` and add the key:

   ```bash
   VITE_OMDB_API_KEY=your_omdb_api_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

Vite exposes variables prefixed with `VITE_` to browser code. For a public or
high-traffic deployment, proxy OMDb requests through a backend so the key and
its quota are not exposed to visitors.

## Checks

```bash
npm run lint
npm run build
```
