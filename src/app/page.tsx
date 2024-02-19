import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <h1>NextJS Edge Params Bug</h1>
        <span>
          When you pass a params prop to a page rendered on the edge runtime, it
          also passes it to the searchParams prop
        </span>
      </header>
      <br />
      <br />
      <main>
        Click to see the same code run on different runtimes: <br />
        <ul>
          <li>
            <Link href={`/node/test`}>NodeJS Runtime</Link>
          </li>
          <li>
            <Link href={`/edge/test`}>Edge Runtime</Link>
          </li>
        </ul>
        <br />
        Due to this, extra invalid searchParams get added to the URL when you
        try to create a URL with the searchParams object.
        <br />
        Eg: calling APIs or redirecting while maintaining state
      </main>
    </>
  );
}
