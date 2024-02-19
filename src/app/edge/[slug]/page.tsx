export const runtime = "edge";

export default function ParamsTest({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: {};
}) {
  return (
    <>
      <header>
        <h1>Edge Runtime</h1>
        <span>
          If you opened this page via the link, the expected output is for the
          object shown below to be empty
        </span>
      </header>
      <br />
      <br />
      <main>
        <span>
          The searchParams objects is being passed to JSON.stringify()
        </span>
        <br />
        <br />
        <pre>{JSON.stringify(searchParams, null, "\t")}</pre>
        <br />
        <p>
          You can see that the value of our param slug has also been passed to
          the searchParams object
        </p>
      </main>
    </>
  );
}
