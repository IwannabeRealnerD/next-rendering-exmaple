import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>pages router main page</h2>
      <p>This page is prerendered page.</p>
      <Link href="/ssr">page SSR Page</Link>
      <Link href="/ssg">page SSR Page</Link>
    </main>
  );
}
