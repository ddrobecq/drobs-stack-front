This is a the Drobs-stack for bootstrapping a Next.js web app.
The stack includes :
 - Next.js with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
 - Typescript
 - Material UI
 - Material UI Icons library
 - pwa-asset-generator
 - drobs-local-storage-react

# Getting Started
Clone this repository
Change the app name in package.json
Set the dependencies :
```bash
npm install
```

Then , run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/home/page.tsx`. The page auto-updates as you edit the file.

# Generate PWA asset
```bash
npx pwa-asset-generator ./icon.jpg ./pwa-asset -b "#00101a" -p "0%" -m ./pwa-asset/site.webmanifest -i ./pwa-asset/index.html -q 100 -f -w -d -x 
```

# Learn More
## Next.js
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/)
## Material UI
To learn more about Material UI, take a look on https://mui.com/material-ui/
## pwa-asset-generator
To learn more about pwa-asset-generator, take a look on https://github.com/elegantapp/pwa-asset-generator/blob/master/README.md
## drobs-local-storage-react
To leanr more about drobs-local-storage-react, take a look on https://github.com/ddrobecq/drobs-local-storage-react