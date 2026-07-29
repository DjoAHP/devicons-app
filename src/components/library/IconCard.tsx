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
    <div className="group flex flex-col items-center gap-0.5">
      <div className="glass-card relative rounded-lg p-2">
        <button
          type="button"
          onClick={() => onSelect(icone)}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-foreground transition-colors hover:text-accent focus:outline-none"
          aria-label={`Voir les snippets de l'icône ${icone.nom}`}
          title="Information"
        >
          <Component className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="flex w-full items-center justify-center gap-0.5 overflow-hidden">
        <span className="block max-w-[70px] truncate text-center text-[10px] font-medium text-foreground" title={icone.nom}>
          {icone.nom}
        </span>
        <button
          type="button"
          onClick={() => onCopy(icone)}
          aria-label={`Copier le SVG de l'icône ${icone.nom}`}
          title="Copier le SVG"
          className="cursor-pointer rounded p-0.5 text-muted-foreground hover:bg-muted/60 hover:text-accent focus:outline-none"
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
