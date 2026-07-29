import { ICONES } from "@/icons/registry";
import { LogoAhpIcon } from "djodev-icons";
import { version } from "../../../package.json";

interface NavbarProps {
  onToggleMenu: () => void;
  menuOuvert: boolean;
}

/** Barre de navigation supérieure, collante et vitrée. */
export function Navbar({ onToggleMenu, menuOuvert }: NavbarProps) {
  return (
    <header className="glass-panel sticky top-0 z-40 rounded-none border-x-0 border-t-0">
      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onToggleMenu}
            aria-expanded={menuOuvert}
            aria-label="Afficher les catégories"
            className="shrink-0 rounded-xl border border-border bg-muted/40 p-2 text-muted-foreground transition-colors hover:text-foreground lg:hidden"
          >
            <span className="block h-0.5 w-4 bg-current" />
            <span className="mt-1 block h-0.5 w-4 bg-current" />
            <span className="mt-1 block h-0.5 w-4 bg-current" />
          </button>
          <span className="flex items-center gap-2 truncate text-lg font-black sm:text-xl">
            <LogoAhpIcon className="h-6 w-6 text-foreground" />
            <span className="texte-gradient">djodev-icons</span>
            <span className="text-xs font-normal text-muted-foreground">v{version}</span>
          </span>
        </div>

        <nav aria-label="Navigation principale" className="hidden justify-center gap-1 md:flex">
          <a
            href="#grille"
            className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Bibliothèque
          </a>
          <a
            href="/documentation"
            className="rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Documentation
          </a>
        </nav>

        <p className="shrink-0 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
          {ICONES.length} icônes
        </p>
      </div>
    </header>
  );
}
