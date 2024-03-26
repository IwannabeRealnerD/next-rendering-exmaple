import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>app router main page</h2>
      <Link href="/ssr">page SSR Page</Link>
    </main>
  );
}
