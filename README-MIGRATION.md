# Nexila Technologies — Next.js + TypeScript migration

Frontend-only migration from React + Vite to Next.js App Router + TypeScript.

## Run locally
1. Use Node.js 20.9+ (Node.js 22 LTS recommended).
2. Copy `.env.local.example` to `.env.local` and fill in the public frontend configuration values.
3. Run `npm install`.
4. Run `npm run dev` and open http://localhost:3000.
5. Run `npm run typecheck` and `npm run build` before deployment.

## Migration notes
- Existing `src/pages`, `src/components`, `src/data`, `src/seo`, and `src/assets` folders are retained.
- JSX files are now TSX and JS source files are now TS.
- Existing styles and static assets are retained; global styles load from `src/app/layout.tsx`.
- Existing router imports use `src/lib/router-compat.tsx` to map navigation to Next.js App Router.
- No backend, database, authentication service, or API routes have been created.
- `VITE_API_BASE_URL` is now `NEXT_PUBLIC_API_BASE_URL`; `VITE_RAZORPAY_KEY_ID` is now `NEXT_PUBLIC_RAZORPAY_KEY_ID`.
- `NEXT_PUBLIC_*` values are exposed to browsers. Keep private secrets on a future backend.
- Legacy client-side SEO metadata behavior is retained temporarily; migrate each page's SEO into Next.js `metadata` / `generateMetadata` for complete server-rendered SEO.
- Test form, payment, navigation, media and responsive flows before deployment.
