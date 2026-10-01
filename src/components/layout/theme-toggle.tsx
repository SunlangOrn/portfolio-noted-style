"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "portfolio-theme";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const requestedTheme = new URLSearchParams(window.location.search).get("theme");
    const savedTheme = window.localStorage.getItem(storageKey);
    const shouldUseDark = requestedTheme
      ? requestedTheme === "dark"
      : savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    window.localStorage.setItem(storageKey, shouldUseDark ? "dark" : "light");
    if (requestedTheme) window.history.replaceState({}, "", window.location.pathname);
    const frameId = window.requestAnimationFrame(() => setIsDark(shouldUseDark));
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <a
      href={`?theme=${isDark ? "light" : "dark"}`}
      aria-label={isDark ? "Use light mode" : "Use dark mode"}
      title={isDark ? "Use light mode" : "Use dark mode"}
      className="grid size-9 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {isDark ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
    </a>
  );
}
