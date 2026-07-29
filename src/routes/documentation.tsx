import { createFileRoute } from "@tanstack/react-router";

import { DocSidebar } from "@/components/library/DocSidebar";
import { Navbar } from "@/components/library/Navbar";
import { version } from "../../package.json";

const TITRE = `Documentation | djodev-icons v${version}`;
const DESCRIPTION =
  "Documentation complète de la librairie d'icônes SVG djodev-icons : installation, utilisation, et exemples de code.";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: TITRE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITRE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Documentation,
});

function Documentation() {
  return (
    <div className="min-h-screen w-full">
      <Navbar menuOuvert={false} onToggleMenu={() => {}} />

      <div className="flex w-full flex-col lg:flex-row">
        <aside className="px-3 pt-3 lg:w-64 lg:shrink-0 lg:px-0 lg:pt-0">
          <DocSidebar className="lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)] lg:rounded-none lg:border-y-0 lg:border-l-0" />
        </aside>

        <main className="min-w-0 flex-1 space-y-12 p-3 sm:p-6 lg:p-8">
          {/* Introduction */}
          <section id="introduction" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Introduction</h2>
            <div className="glass-panel space-y-4 rounded-2xl p-6">
              <p className="text-muted-foreground">
                <strong className="text-foreground">djodev-icons</strong> est une
                bibliothèque d'icônes SVG maison, conçue pour les projets React. Chaque
                icône est un composant React TypeScript avec des props personnalisables.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="glass-card rounded-xl p-4">
                  <p className="text-2xl font-bold text-primary">52</p>
                  <p className="text-sm text-muted-foreground">Icônes SVG</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="text-2xl font-bold text-primary">10</p>
                  <p className="text-sm text-muted-foreground">Catégories</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="text-2xl font-bold text-primary">2</p>
                  <p className="text-sm text-muted-foreground">Styles (Plein / Contour)</p>
                </div>
              </div>

              <h3 className="pt-2 text-lg font-semibold text-foreground">Stack technique</h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                <li>React 19 + TypeScript</li>
                <li>Vite (build &amp; dev server)</li>
                <li>Tailwind CSS v4 (styling)</li>
                <li>TanStack Router (routing)</li>
              </ul>

              <h3 className="pt-2 text-lg font-semibold text-foreground">
                Catégories disponibles
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Navigation",
                  "Interface",
                  "Alertes",
                  "Utilisateur",
                  "Cubic",
                  "Lecteur Audio",
                  "Corbeille",
                  "Upload",
                  "Logo",
                  "Réseaux",
                ].map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Installation */}
          <section id="installation" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Installation</h2>
            <div className="glass-panel space-y-4 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground">Via npm</h3>
              <div className="rounded-xl bg-muted/60 p-4 font-mono text-sm text-primary">
                npm install djodev-icons
              </div>

              <h3 className="pt-2 text-lg font-semibold text-foreground">Peer dependency</h3>
              <p className="text-sm text-muted-foreground">
                React &ge; 18.0.0 est requis. Assure-toi que ton projet utilise une version
                compatible.
              </p>

              <h3 className="pt-2 text-lg font-semibold text-foreground">TypeScript</h3>
              <p className="text-sm text-muted-foreground">
                Les types TypeScript sont inclus. Pas besoin d&apos;installer séparément{" "}
                <code className="rounded bg-muted/60 px-1.5 py-0.5 text-xs">
                  @types/djodev-icons
                </code>
                .
              </p>
            </div>
          </section>

          {/* Utilisation */}
          <section id="utilisation" className="scroll-mt-20">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Utilisation</h2>
            <div className="glass-panel space-y-6 rounded-2xl p-6">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Importer une icône
                </h3>
                <div className="rounded-xl bg-muted/60 p-4 font-mono text-sm text-muted-foreground">
                  <span className="text-primary">import</span>{" "}
                  {"{ AlertPleinIcon, HomeContourIcon }"}{" "}
                  <span className="text-primary">from</span>{" "}
                  <span className="text-green-400">&quot;djodev-icons&quot;</span>;
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Utiliser dans un composant
                </h3>
                <div className="overflow-x-auto rounded-xl bg-muted/60 p-4 font-mono text-sm leading-relaxed text-muted-foreground">
                  <pre>{`function MonComposant() {
  return (
    <div className="flex gap-4">
      <AlertPleinIcon className="h-6 w-6 text-red-500" />
      <HomeContourIcon className="h-6 w-6 text-sky-400" />
    </div>
  );
}`}</pre>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Props disponibles
                </h3>
                <div className="glass-card rounded-xl p-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left text-muted-foreground">
                        <th className="pb-2 font-medium">Prop</th>
                        <th className="pb-2 font-medium">Type</th>
                        <th className="pb-2 font-medium">Défaut</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2 font-mono text-xs text-primary">className</td>
                        <td className="py-2 font-mono text-xs">string</td>
                        <td className="py-2 font-mono text-xs">-</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 font-mono text-xs text-primary">width</td>
                        <td className="py-2 font-mono text-xs">number</td>
                        <td className="py-2 font-mono text-xs">24</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-mono text-xs text-primary">height</td>
                        <td className="py-2 font-mono text-xs">number</td>
                        <td className="py-2 font-mono text-xs">24</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  Accès CDN (SVG statiques)
                </h3>
                <p className="mb-2 text-sm text-muted-foreground">
                  Les SVGs sont aussi accessibles directement via URL :
                </p>
                <div className="space-y-1 rounded-xl bg-muted/60 p-4 font-mono text-xs text-muted-foreground">
                  <p>
                    /icons/plein/<span className="text-primary">alert</span>.svg
                  </p>
                  <p>
                    /icons/contour/<span className="text-primary">alert</span>.svg
                  </p>
                  <p>
                    /icons/plein/corbeille/
                    <span className="text-primary">corbeille01</span>.svg
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
