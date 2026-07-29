import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useMemo, useRef, useState } from "react";

import { CopyToast } from "@/components/library/CopyToast";
import { IconGrid } from "@/components/library/IconGrid";
import { IconModal } from "@/components/library/IconModal";
import { Navbar } from "@/components/library/Navbar";
import { SearchBar, type FiltreStyle } from "@/components/library/SearchBar";
import { Sidebar } from "@/components/library/Sidebar";
import { ICONES, type CategorieId, type IconEntry } from "@/icons/registry";
import { version } from "../../package.json";

const TITRE = `DevIcons | v${version}`;
const DESCRIPTION =
  "Bibliothèque d'icônes SVG maison en React + TypeScript : recherche, styles Plein et Contour, et snippets React / HTML / SVG prêts à copier.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Bibliotheque,
});

function Bibliotheque() {
  const [recherche, setRecherche] = useState("");
  const [style, setStyle] = useState<FiltreStyle>("plein");
  const [categorie, setCategorie] = useState<CategorieId | "toutes">("toutes");
  const [selection, setSelection] = useState<IconEntry | null>(null);
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const minuteur = useRef<number | null>(null);

  const resultats = useMemo(() => {
    const terme = recherche.trim().toLowerCase();
    return ICONES.filter((icone) => {
      const correspondStyle = icone.style === style;
      const correspondCategorie = categorie === "toutes" || icone.categorie === categorie;
      const correspondTerme =
        terme.length === 0 ||
        icone.nom.toLowerCase().includes(terme) ||
        icone.composant.toLowerCase().includes(terme) ||
        icone.motsCles.some((mot) => mot.includes(terme));
      return correspondStyle && correspondCategorie && correspondTerme;
    });
  }, [recherche, style, categorie]);

  const choisirCategorie = (valeur: CategorieId | "toutes") => {
    setCategorie(valeur);
    setMenuOuvert(false);
  };

  const copierSvg = useCallback(async (icone: IconEntry) => {
    try {
      await navigator.clipboard.writeText(icone.svg);
      setToast(`SVG de « ${icone.nom} » copié`);
    } catch {
      setToast("Copie impossible");
    }
    if (minuteur.current) window.clearTimeout(minuteur.current);
    minuteur.current = window.setTimeout(() => setToast(null), 1800);
  }, []);

  return (
    <div className="min-h-screen w-full">
      <Navbar menuOuvert={menuOuvert} onToggleMenu={() => setMenuOuvert((o) => !o)} />

      <div className="flex w-full flex-col lg:flex-row">
        <aside className="px-3 pt-3 lg:w-64 lg:shrink-0 lg:px-0 lg:pt-0">
          <Sidebar
            categorieActive={categorie}
            onChangeCategorie={choisirCategorie}
            className={`${menuOuvert ? "block" : "hidden"} lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)] lg:rounded-none lg:border-y-0 lg:border-l-0`}
          />
        </aside>

        <main id="grille" className="min-w-0 flex-1 space-y-4 p-3 sm:p-4">
          <SearchBar
            recherche={recherche}
            onRechercheChange={setRecherche}
            style={style}
            onStyleChange={setStyle}
          />

          <p className="text-xs text-muted-foreground">
            {resultats.length} résultat{resultats.length > 1 ? "s" : ""}
          </p>

          <IconGrid icones={resultats} onSelect={setSelection} onCopy={copierSvg} />
        </main>
      </div>

      <IconModal icone={selection} onClose={() => setSelection(null)} />
      <CopyToast message={toast} />
    </div>
  );
}
