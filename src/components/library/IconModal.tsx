import { useEffect } from "react";

import { LIBELLE_STYLE, type IconEntry } from "@/icons/registry";
import { CodeTabs } from "./CodeTabs";

interface IconModalProps {
  icone: IconEntry | null;
  onClose: () => void;
}

/** Modal glassmorphism : aperçu de l'icône + snippets. */
export function IconModal({ icone, onClose }: IconModalProps) {
  useEffect(() => {
    if (!icone) return;
    const surTouche = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", surTouche);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", surTouche);
      document.body.style.overflow = "";
    };
  }, [icone, onClose]);

  if (!icone) return null;

  const { Component } = icone;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-background/70 p-4 backdrop-blur-md sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Icône ${icone.nom}`}
      onClick={onClose}
    >
      <div
        className="glass-panel max-h-[90vh] w-full max-w-xl overflow-y-auto scroll-discret rounded-3xl p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-muted/60 text-accent">
              <Component className="h-8 w-8" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h2 className="truncate text-lg font-semibold text-foreground">{icone.nom}</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Style {LIBELLE_STYLE[icone.style]} · {icone.composant}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="shrink-0 rounded-xl border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Fermer
          </button>
        </div>

        <p className="mt-4 rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
          Fichier source : <code className="text-accent">{icone.fichier}</code>
        </p>

        <div className="mt-5">
          <CodeTabs icone={icone} />
        </div>
      </div>
    </div>
  );
}
