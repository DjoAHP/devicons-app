import { SearchContourIcon } from "djodev-icons";
import { LIBELLE_STYLE, type IconStyle } from "@/icons/registry";

export type FiltreStyle = IconStyle;

interface SearchBarProps {
  recherche: string;
  onRechercheChange: (valeur: string) => void;
  style: FiltreStyle;
  onStyleChange: (style: FiltreStyle) => void;
}

const ONGLETS: { id: FiltreStyle; libelle: string }[] = [
  { id: "plein", libelle: LIBELLE_STYLE.plein },
  { id: "contour", libelle: LIBELLE_STYLE.contour },
];

/** Champ de recherche + filtre de style. */
export function SearchBar({ recherche, onRechercheChange, style, onStyleChange }: SearchBarProps) {
  return (
    <div className="glass-panel flex flex-col gap-3 rounded-2xl p-3 sm:flex-row sm:items-center">
      <div className="relative min-w-0 flex-1">
        <SearchContourIcon
          className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={recherche}
          onChange={(event) => onRechercheChange(event.target.value)}
          placeholder="Rechercher une icône…"
          aria-label="Rechercher une icône par nom"
          className="h-11 w-full rounded-xl border border-input bg-muted/40 pr-3 pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:border-transparent focus:ring-2 focus:ring-ring focus:outline-none"
        />
      </div>

      <div
        role="tablist"
        aria-label="Filtrer par style"
        className="flex shrink-0 gap-1 rounded-xl border border-border bg-muted/40 p-1"
      >
        {ONGLETS.map((onglet) => {
          const actif = onglet.id === style;
          return (
            <button
              key={onglet.id}
              type="button"
              role="tab"
              aria-selected={actif}
              onClick={() => onStyleChange(onglet.id)}
              className={`flex-1 cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors sm:flex-none ${
                actif
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {onglet.libelle}
            </button>
          );
        })}
      </div>
    </div>
  );
}
