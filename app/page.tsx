import Image from "next/image";

export default function Home() {
  return (
  <main className="flex min-h-screen">
    <h1> NEXT</h1>
    <a href="/routes/page1">Page 1</a>
    <br />
    <a href="/routes/page2">Page 2</a>
  </main>
  );
}
