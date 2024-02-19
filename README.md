# Next.js Edge Runtime Params Bug

This is a small repo created to show an example of a bug in Next.js (v14.1.0).

_This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)._

## Bug

When dynamic routing is implemented in a project using the Edge runtime, it is supposed to send the params of the route to the page. Next.js does so via tha `params` prop ([Docs](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)). If you try to do so using the edge runtime, the value of `params` is also passed to the `searchParams` props of the page.

## How to replicate

1. Create a dynamic route: `/[slug]`

1. Add `params` and `searchParams` props to the default exported component:

   ```JSX
   export default function Page({
    params,
    searchParams
   }:{
    params: {
      slug: string
    },
    searchParams: {}
   }) {
     // Code
   }
   ```

1. Add a way to see the content of `searchParams` (and params too optionally)

   ```JSX
   return(
     <pre>
       {JSON.stringify(searchParams, null, "\t")}
     </pre>
   )
   ```

_Feel free to use any method you prefer here, `console.log()`, etc._

1. Run/build the project and navigate to the appropriate page: `/anyRandomString`

1. You'll see the both `searchParams` has all entries present in `params`

   ```JSON
   "searchParams": {
     "slug": "someRandomString"
   }
   ```

## Use my example

_I am using NodeJS (v21.6.1), feel to try it on yarn, bun. I don't use them, so no guarantees_

1. Install dependencies

   ```bash
   npm -i
   ```

1. Either build a production version and then run it or run a development server

   ```bash
   npm run build && npm run start
   # or
   npm run dev
   ```

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
