import type { IconEntry } from "@/icons/registry";
import { IconCard } from "./IconCard";

interface IconGridProps {
  icones: IconEntry[];
  onSelect: (icone: IconEntry) => void;
  onCopy: (icone: IconEntry) => void;
}

/** Grille responsive des icônes filtrées. */
export function IconGrid({ icones, onSelect, onCopy }: IconGridProps) {
  if (icones.length === 0) {
    return (
      <div className="glass-panel rounded-2xl p-10 text-center">
        <p className="text-sm font-medium text-foreground">Aucune icône trouvée</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Essayez un autre nom ou changez de style.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
      {icones.map((icone) => (
        <IconCard key={icone.id} icone={icone} onSelect={onSelect} onCopy={onCopy} />
      ))}
    </div>
  );
}
