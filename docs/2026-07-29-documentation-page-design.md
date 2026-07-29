# Design: Page Documentation djodev-icons

## Objectif

Créer une page `/documentation` dédiée à la documentation de la librairie d'icônes djodev-icons, avec un style cohérent avec la page Bibliothèque existante.

## Architecture

### Routes

| Route | Fichier | Description |
|-------|---------|-------------|
| `/documentation` | `src/routes/documentation.tsx` | Page principale de documentation |

### Composants

| Composant | Fichier | Rôle |
|-----------|---------|------|
| `DocSidebar` | `src/components/library/DocSidebar.tsx` | Navigation par chapitres (même style que `Sidebar.tsx`) |
| `Documentation` | Dans `documentation.tsx` | Contenu des sections |

### Layout

```
┌──────────────────────────────────────────────┐
│  Navbar (identique, lien Documentation → /documentation)  │
├──────────┬───────────────────────────────────┤
│          │                                   │
│ Doc      │  Contenu de la documentation      │
│ Sidebar  │                                   │
│          │  # Introduction                   │
│ ● Intro  │  Description de la librairie     │
│ ○ Install│                                   │
│ ○ Usage  │  # Installation                   │
│          │  npm install djodev-icons          │
│          │                                   │
│          │  # Utilisation                     │
│          │  Import npm + CDN + exemples       │
│          │                                   │
└──────────┴───────────────────────────────────┘
```

### Contenu des chapitres

#### 1. Introduction
- Description : bibliothèque d'icônes SVG maison en React + TypeScript
- Stack : React 19, Vite, TanStack Router, Tailwind CSS v4
- Nombre d'icônes : 52 SVGs, 10 catégories, 2 styles (plein/contour)
- Cas d'usage : projets React nécessitant des icônes personnalisées

#### 2. Installation
- Commande npm : `npm install djodev-icons`
- Peer dependency : React ≥ 18.0.0
- TypeScript : types inclus (`dist/lib/index.d.ts`)

#### 3. Utilisation
- Import npm : `import { AlertPleinIcon } from "djodev-icons"`
- Accès CDN : `/icons/plein/alert.svg`, `/icons/contour/alert.svg`
- Exemples de code React avec props (className, width, height)
- Snippets disponibles dans la modale d'icône (React, HTML, SVG)

### Composants existants réutilisés

- `Navbar.tsx` — Barre de navigation (identique)
- Styles CSS `glassmorphism` depuis `src/styles.css`
- Design tokens OKLCH (dark mode par défaut)

### Changements Navbar

- Lien "Documentation" : `href="https://lucide.dev"` → `href="/documentation"`
- Utiliser `<a>` avec `onClick` pour la navigation TanStack Router, ou `<Link>` de `@tanstack/react-router`

### Fichiers modifiés

| Fichier | Action |
|---------|--------|
| `src/routes/documentation.tsx` | **Créer** — Page de documentation |
| `src/components/library/DocSidebar.tsx` | **Créer** — Sidebar de navigation |
| `src/components/library/Navbar.tsx` | **Modifier** — Lien Documentation → `/documentation` |
| `src/routeTree.gen.ts` | **Auto-généré** par TanStack Router |

### Design system

- Même glassmorphism que la Bibliothèque (`glass-pane`, `glass-panel`)
- Dark mode par défaut
- Police : misma (Google Fonts via CDN)
- Couleurs : tokens OKLCH existants

### Non inclus

- Pas de versioning de la doc
- Pas de recherche dans la doc
- Pas de chapitres avancés (contribution, changelog, roadmap)
