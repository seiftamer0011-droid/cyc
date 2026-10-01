import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/60 bg-ink/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="text-xl font-bold tracking-tight">CYC<span className="text-cyan">.</span></Link>
        <div className="flex items-center gap-6 text-sm text-mist">
          <a href="#how" className="hidden hover:text-white sm:block">How it works</a>
          <a href="#trust" className="hidden hover:text-white sm:block">Why both sides</a>
          <Link href="/dashboard" className="rounded-lg bg-cyan px-4 py-2 font-semibold text-ink hover:brightness-110">Open dashboard</Link>
        </div>
      </nav>
    </header>
  );
}
