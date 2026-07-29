import { useEffect, useState } from "react";

type ChapterId = "introduction" | "installation" | "utilisation";

interface Chapter {
  id: ChapterId;
  label: string;
}

const CHAPTERS: Chapter[] = [
  { id: "introduction", label: "Introduction" },
  { id: "installation", label: "Installation" },
  { id: "utilisation", label: "Utilisation" },
];

interface DocSidebarProps {
  className?: string;
}

export function DocSidebar({ className = "" }: DocSidebarProps) {
  const [activeSection, setActiveSection] = useState<ChapterId>("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as ChapterId);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const chapter of CHAPTERS) {
      const el = document.getElementById(chapter.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: ChapterId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`glass-pane flex flex-col gap-1 rounded-2xl border border-border p-4 ${className}`}
      aria-label="Documentation"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        Chapitres
      </p>
      <ul className="flex flex-col gap-0.5">
        {CHAPTERS.map((chapter) => (
          <li key={chapter.id}>
            <button
              onClick={() => scrollTo(chapter.id)}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                activeSection === chapter.id
                  ? "bg-sidebar-accent font-semibold text-accent"
                  : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
              }`}
            >
              {chapter.label}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl border border-border bg-muted/40 p-3">
        <p className="text-xs text-muted-foreground">
          Retour à la{" "}
          <a href="/" className="text-primary hover:underline">
            Bibliothèque
          </a>
        </p>
      </div>
    </nav>
  );
}
