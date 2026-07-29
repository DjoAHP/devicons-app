import { useEffect, useState } from "react";

import type { IconEntry } from "@/icons/registry";
import { snippetHtml, snippetReact, snippetSvg } from "@/lib/snippets";

type OngletCode = "react" | "html" | "svg";

const ONGLETS: { id: OngletCode; libelle: string }[] = [
  { id: "react", libelle: "React" },
  { id: "html", libelle: "HTML" },
  { id: "svg", libelle: "SVG" },
];

interface CodeTabsProps {
  icone: IconEntry;
}

/** Onglets React / HTML / SVG avec bouton de copie. */
export function CodeTabs({ icone }: CodeTabsProps) {
  const [onglet, setOnglet] = useState<OngletCode>("react");
  const [copie, setCopie] = useState(false);

  const snippets: Record<OngletCode, string> = {
    react: snippetReact(icone),
    html: snippetHtml(icone),
    svg: snippetSvg(icone),
  };
  const contenu = snippets[onglet];

  useEffect(() => {
    setCopie(false);
  }, [onglet, icone.id]);

  const copier = async () => {
    try {
      await navigator.clipboard.writeText(contenu);
      setCopie(true);
      window.setTimeout(() => setCopie(false), 1800);
    } catch {
      setCopie(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <div
          role="tablist"
          aria-label="Format du snippet"
          className="flex min-w-0 gap-1 rounded-xl border border-border bg-muted/40 p-1"
        >
          {ONGLETS.map((item) => {
            const actif = item.id === onglet;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={actif}
                onClick={() => setOnglet(item.id)}
                className={`cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  actif
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.libelle}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={copier}
          className="shrink-0 cursor-pointer rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus:outline-none"
        >
          {copie ? "Copié !" : "Copier"}
        </button>
      </div>

      <pre className="scroll-discret max-h-56 overflow-auto rounded-xl border border-border bg-background/70 p-4 text-xs leading-relaxed text-muted-foreground">
        <code>{contenu}</code>
      </pre>
    </div>
  );
}
