import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>pages router main page</h2>
      <p>This page is prerendered page.</p>
      <Link href="/ssr">SSR Page</Link>
      <Link href="/ssg">SSG Page</Link>
      <Link href="/isr">ISR Page</Link>
    </main>
  );
}
