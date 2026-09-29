import Link from "next/link";
import { siteConfig } from "@/config/site";
import { navItems } from "@/navigation/nav-items";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-handwriting text-3xl font-bold text-black">
          {siteConfig.name} 
        </Link>

        <ul className="flex items-center gap-6 text-sm ">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:underline text-black font-handwriting text-2xl">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}