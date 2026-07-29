import { CATEGORIES, type CategorieId, ICONES } from "@/icons/registry";

interface SidebarProps {
  categorieActive: CategorieId | "toutes";
  onChangeCategorie: (categorie: CategorieId | "toutes") => void;
  className?: string;
}

/** Sidebar des catégories (données de démonstration). */
export function Sidebar({ categorieActive, onChangeCategorie, className = "" }: SidebarProps) {
  const compte = (id: CategorieId | "toutes") =>
    id === "toutes" ? ICONES.length : ICONES.filter((i) => i.categorie === id).length;

  const entrees: { id: CategorieId | "toutes"; libelle: string }[] = [
    { id: "toutes", libelle: "Toutes les icônes" },
    ...CATEGORIES,
  ];

  return (
    <nav className={`glass-panel rounded-2xl p-4 ${className}`} aria-label="Catégories">
      <p className="px-2 pb-3 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        Catégories
      </p>
      <ul className="space-y-1">
        {entrees.map((entree) => {
          const actif = entree.id === categorieActive;
          return (
            <li key={entree.id}>
              <button
                type="button"
                onClick={() => onChangeCategorie(entree.id)}
                aria-current={actif ? "true" : undefined}
                className={`flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
                  actif
                    ? "bg-sidebar-accent font-semibold text-accent"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                <span className="truncate">{entree.libelle}</span>
                <span className="shrink-0 rounded-full bg-muted/70 px-2 py-0.5 text-[11px] text-muted-foreground">
                  {compte(entree.id)}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 rounded-xl border border-border bg-muted/40 p-3">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Ajoutez un SVG dans <code className="text-accent">src/icons/svg</code>, créez son
          composant, puis exportez-le depuis <code className="text-accent">src/icons/index.ts</code>
          .
        </p>
      </div>
    </nav>
  );
}
