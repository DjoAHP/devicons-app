import type { IconEntry } from "@/icons/registry";

/** Snippet d'utilisation avec le composant React de la librairie. */
export function snippetReact(icone: IconEntry): string {
  return `import { ${icone.composant} } from "@djodev-icons";

export function Exemple() {
  return <${icone.composant} className="h-6 w-6 text-sky-400" />;
}`;
}

/** Snippet HTML utilisant le fichier SVG servi statiquement. */
export function snippetHtml(icone: IconEntry): string {
  return `<img
  src="/icons/${icone.style}/${icone.slug}.svg"
  alt="Icône ${icone.nom} (${icone.style})"
  width="24"
  height="24"
/>`;
}

/** Snippet SVG inline (contenu brut du fichier source). */
export function snippetSvg(icone: IconEntry): string {
  return icone.svg;
}
