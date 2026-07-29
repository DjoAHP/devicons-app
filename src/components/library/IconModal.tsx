import { useEffect, useState } from "react";

import { LIBELLE_STYLE, type IconEntry } from "@/icons/registry";
import { CodeTabs } from "./CodeTabs";

interface IconModalProps {
  icone: IconEntry | null;
  onClose: () => void;
}

/** Modal glassmorphism : aperçu de l'icône + snippets. */
export function IconModal({ icone, onClose }: IconModalProps) {
  const [copieNpm, setCopieNpm] = useState(false);

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

  const copierNpm = async () => {
    try {
      await navigator.clipboard.writeText("npm install djodev-icons");
      setCopieNpm(true);
      window.setTimeout(() => setCopieNpm(false), 1800);
    } catch {
      setCopieNpm(false);
    }
  };

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
            <span className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-muted/60 text-accent">
              <Component className="h-20 w-20" aria-hidden="true" />
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
            className="shrink-0 cursor-pointer rounded-xl border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Fermer
          </button>
        </div>

        <div className="mt-4">
          <p className="mb-1 text-xs font-medium text-muted-foreground">React install</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs text-accent">npm install djodev-icons</code>
            <button
              type="button"
              onClick={copierNpm}
              className="shrink-0 cursor-pointer rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              {copieNpm ? "Copié !" : "Copier"}
            </button>
          </div>
        </div>

        <div className="mt-5">
          <CodeTabs icone={icone} />
        </div>
      </div>
    </div>
  );
}
