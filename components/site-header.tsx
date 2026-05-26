import { navItems } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-5 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary navigation"
        className="pointer-events-auto hidden rounded-full border border-white/10 bg-black/35 px-3 py-2 shadow-2xl shadow-black/30 backdrop-blur-xl md:block"
      >
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-stone-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200/70"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
