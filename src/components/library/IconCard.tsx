import type { IconEntry } from "@/icons/registry";

interface IconCardProps {
  icone: IconEntry;
  onSelect: (icone: IconEntry) => void;
  onCopy: (icone: IconEntry) => void;
}

/** Carte d'une icône dans la grille. */
export function IconCard({ icone, onSelect, onCopy }: IconCardProps) {
  const { Component } = icone;

  return (
    <div className="group flex flex-col items-center gap-1">
      <div className="glass-card relative rounded-xl p-3">
        <button
          type="button"
          onClick={() => onSelect(icone)}
          className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl text-foreground transition-colors hover:text-accent focus:outline-none"
          aria-label={`Voir les snippets de l'icône ${icone.nom}`}
          title="Information"
        >
          <Component className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>

      <div className="flex items-center gap-1">
        <span className="block truncate text-center text-xs font-medium text-foreground">
          {icone.nom}
        </span>
        <button
          type="button"
          onClick={() => onCopy(icone)}
          aria-label={`Copier le SVG de l'icône ${icone.nom}`}
          title="Copier le SVG"
          className="cursor-pointer rounded-md p-0.5 text-muted-foreground hover:bg-muted/60 hover:text-accent focus:outline-none"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15V5a2 2 0 0 1 2-2h10" />
          </svg>
        </button>
      </div>
    </div>
  );
}
