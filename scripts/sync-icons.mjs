#!/usr/bin/env node

/**
 * sync-icons.mjs
 * 
 * Copie les SVGs depuis src/icons/svg/ vers public/icons/
 * pour les rendre accessibles via URL (CDN/Netlify/GitHub Pages).
 * 
 * Usage: node scripts/sync-icons.mjs
 * Ou: npm run build:icons
 */

import { cpSync, mkdirSync, existsSync, rmSync, readdirSync, statSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SRC_DIR = resolve(__dirname, "../src/icons/svg");
const DEST_DIR = resolve(__dirname, "../public/icons");

console.log("🔄 Sync des icônes SVG vers public/icons/...");

// Nettoyer le dossier destination
if (existsSync(DEST_DIR)) {
  rmSync(DEST_DIR, { recursive: true });
  console.log("  🗑️  Dossier public/icons/ nettoyé");
}

// Créer les sous-dossiers
mkdirSync(resolve(DEST_DIR, "plein"), { recursive: true });
mkdirSync(resolve(DEST_DIR, "contour"), { recursive: true });

// Copier les SVGs plein
const pleinSrc = resolve(SRC_DIR, "plein");
const pleinDest = resolve(DEST_DIR, "plein");

if (existsSync(pleinSrc)) {
  cpSync(pleinSrc, pleinDest, { recursive: true });
  console.log("  ✅ SVGs plein copiés");
}

// Copier les SVGs contour
const contourSrc = resolve(SRC_DIR, "contour");
const contourDest = resolve(DEST_DIR, "contour");

if (existsSync(contourSrc)) {
  cpSync(contourSrc, contourDest, { recursive: true });
  console.log("  ✅ SVGs contour copiés");
}

// Compter les fichiers copiés
let count = 0;

function countSync(dir) {
  const items = readdirSync(dir);
  for (const item of items) {
    const path = resolve(dir, item);
    if (statSync(path).isDirectory()) {
      countSync(path);
    } else if (item.endsWith(".svg")) {
      count++;
    }
  }
}

countSync(DEST_DIR);

console.log(`\n✅ ${count} icônes SVG synchronisées vers public/icons/`);
console.log(`\n📋 Structure créée :`);
console.log(`   public/icons/plein/     → /icons/plein/{category}/{name}.svg`);
console.log(`   public/icons/contour/   → /icons/contour/{name}.svg`);
console.log(`\n🌐 Exemples d' URLs :`);
console.log(`   http://localhost:5173/icons/plein/alert.svg`);
console.log(`   http://localhost:5173/icons/plein/corbeille/corbeille01.svg`);
console.log(`   http://localhost:5173/icons/contour/alert.svg`);
