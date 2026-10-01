import Link from "next/link";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/config/site";
import { navItems } from "@/navigation/nav-items";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="shrink-0 font-handwriting text-2xl font-bold text-foreground sm:text-3xl">
          {siteConfig.name} 
        </Link>

        <ul className="flex items-center gap-3 text-sm sm:gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-handwriting text-xl text-foreground hover:underline sm:text-2xl">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
