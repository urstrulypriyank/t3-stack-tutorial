import Link from "next/link";

import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.sayHi.query({ text: "Priyank Rai" });
  return (
    <main className="flex min-h-screen ">
      {hello ? <h1>{hello?.greeting}</h1> : <h1>loading...</h1>}
    </main>
  );
}
