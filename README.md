This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running Prisma Migrate
Seed is Insert Dummy data to Database
<ul>
    <li>It creates a new SQL migration file for this migration</li>
    <li>It runs the SQL migration file against the database</li>
</ul>

```bash
$ npx prisma migrate dev --name init
```

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Running Prisma Studio
Seed is Insert Dummy data to Database
```bash
$ npx prisma studio
```

## Running Seed
Seed is Insert Dummy data to Database
```bash
$ npx prisma db seed
```

command to re-generate prisma client
```bash
npx prisma generate
```
## GraphQL
<strong>/pages/api/graphql.ts</strong><br/>
created a new GraphQL Yoga server instance that is the default export <br/>


## Pothos
Pothos is a GraphQL schema construction library where you define your GraphQL schema using code <br/>
<strong>/graphql/types/</strong> for Defining the schema using Pothos
<ul>
<li>name: The name of the model in the Prisma schema you would like to expose.</li>
<li>options: The options for defining the type you're exposing such as the description, fields, etc.</li>
</ul>
Note: You can use CTRL + Space to invoke your editor's intellisense and view the available arguments

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
