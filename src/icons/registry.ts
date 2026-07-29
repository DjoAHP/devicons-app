import type { ComponentType } from "react";

import alertContourRaw from "./svg/contour/alert.svg?raw";
import homeContourRaw from "./svg/contour/home.svg?raw";
import searchContourRaw from "./svg/contour/search.svg?raw";
import userContourRaw from "./svg/contour/user.svg?raw";
import alertPleinRaw from "./svg/plein/alert.svg?raw";
import homePleinRaw from "./svg/plein/home.svg?raw";
import searchPleinRaw from "./svg/plein/search.svg?raw";
import userPleinRaw from "./svg/plein/user.svg?raw";

import {
  AlertContourIcon,
  AlertPleinIcon,
  HomeContourIcon,
  HomePleinIcon,
  SearchContourIcon,
  SearchPleinIcon,
  UserContourIcon,
  UserPleinIcon,
  type IconProps,
} from "./index";

import {
  BallonCubicIcon,
  BoucheCubicIcon,
  CameraCubicIcon,
  CoeurCubicIcon,
  CubeCubicIcon,
  DlCubicIcon,
  FaderCubicIcon,
  FlecheCubicIcon,
  MultiCubicIcon,
  PersoCubicIcon,
  PhotoCubicIcon,
  PlayCubicIcon,
  PlayFlecheCubicIcon,
  SablierCubicIcon,
} from "./components/CubicIcon";

import ballonCubicRaw from "./svg/plein/ballon-cubic.svg?raw";
import boucheCubicRaw from "./svg/plein/bouche-cubic.svg?raw";
import cameraCubicRaw from "./svg/plein/camera-cubic.svg?raw";
import coeurCubicRaw from "./svg/plein/coeur-cubic.svg?raw";
import cubeCubicRaw from "./svg/plein/cube-cubic.svg?raw";
import dlCubicRaw from "./svg/plein/dl-cubic.svg?raw";
import faderCubicRaw from "./svg/plein/fader-cubic.svg?raw";
import flecheCubicRaw from "./svg/plein/fleche-cubic.svg?raw";
import multiCubicRaw from "./svg/plein/multi-cubic.svg?raw";
import persoCubicRaw from "./svg/plein/perso-cubic.svg?raw";
import photoCubicRaw from "./svg/plein/photo-cubic.svg?raw";
import playCubicRaw from "./svg/plein/play-cubic.svg?raw";
import playFlecheCubicRaw from "./svg/plein/play-fleche-cubic.svg?raw";
import sablierCubicRaw from "./svg/plein/sablier-cubic.svg?raw";

import {
  AudioCadrerIcon,
  BoucleCadrerIcon,
  MelangeCadrerIcon,
  MuteCadrerIcon,
  PauseCadrerIcon,
  PlayCadrerIcon,
  PrecedentCadrerIcon,
  SuivantCadrerIcon,
  AudioNeutreIcon,
  BoucleNeutreIcon,
  MelangeNeutreIcon,
  MoinNeutreIcon,
  MuteNeutreIcon,
  PauseNeutreIcon,
  PlayNeutreIcon,
  PlusNeutreIcon,
  PrecedentNeutreIcon,
  SuivantNeutreIcon,
  DeleteTrackNeutreIcon,
  EqNeutreIcon,
} from "./components/LecteurIcon";

import {
  Corbeille01Icon,
  Corbeille02Icon,
  Corbeille03Icon,
  Corbeille04Icon,
  Corbeille05Icon,
} from "./components/CorbeilleIcon";

import {
  UploadImages01Icon,
  UploadImages02Icon,
  UploadImages03Icon,
} from "./components/UploadIcon";

import audioCadrerRaw from "./svg/plein/lecteur-cadrer/audio-cadrer.svg?raw";
import boucleCadrerRaw from "./svg/plein/lecteur-cadrer/boucle-cadrer.svg?raw";
import melangeCadrerRaw from "./svg/plein/lecteur-cadrer/melange-cadrer.svg?raw";
import muteCadrerRaw from "./svg/plein/lecteur-cadrer/mute-cadrer.svg?raw";
import pauseCadrerRaw from "./svg/plein/lecteur-cadrer/pause-cadrer.svg?raw";
import playCadrerRaw from "./svg/plein/lecteur-cadrer/play-cadrer.svg?raw";
import precedentCadrerRaw from "./svg/plein/lecteur-cadrer/precedent-cadrer.svg?raw";
import suivantCadrerRaw from "./svg/plein/lecteur-cadrer/suivant-cadrer.svg?raw";
import audioNeutreRaw from "./svg/plein/lecteur-neutre/audio-neutre.svg?raw";
import boucleNeutreRaw from "./svg/plein/lecteur-neutre/boucle-neutre.svg?raw";
import melangeNeutreRaw from "./svg/plein/lecteur-neutre/melange-neutre.svg?raw";
import moinNeutreRaw from "./svg/plein/lecteur-neutre/moin-neutre.svg?raw";
import muteNeutreRaw from "./svg/plein/lecteur-neutre/mute-neutre.svg?raw";
import pauseNeutreRaw from "./svg/plein/lecteur-neutre/pause-neutre.svg?raw";
import playNeutreRaw from "./svg/plein/lecteur-neutre/play-neutre.svg?raw";
import plusNeutreRaw from "./svg/plein/lecteur-neutre/plus-neutre.svg?raw";
import precedentNeutreRaw from "./svg/plein/lecteur-neutre/precedent-neutre.svg?raw";
import suivantNeutreRaw from "./svg/plein/lecteur-neutre/suivant-neutre.svg?raw";
import deleteTrackNeutreRaw from "./svg/plein/lecteur-neutre/delete-track-neutre.svg?raw";
import eqNeutreRaw from "./svg/plein/lecteur-neutre/eq-neutre.svg?raw";

import corbeille01Raw from "./svg/plein/corbeille/corbeille01.svg?raw";
import corbeille02Raw from "./svg/plein/corbeille/corbeille02.svg?raw";
import corbeille03Raw from "./svg/plein/corbeille/corbeille03.svg?raw";
import corbeille04Raw from "./svg/plein/corbeille/corbeille04.svg?raw";
import corbeille05Raw from "./svg/plein/corbeille/corbeille05.svg?raw";

import uploadImages01Raw from "./svg/plein/upload/upload-images01.svg?raw";
import uploadImages02Raw from "./svg/plein/upload/upload-images02.svg?raw";
import uploadImages03Raw from "./svg/plein/upload/upload-images03.svg?raw";

import logoAhpRaw from "./svg/plein/logo/logo-ahp.svg?raw";

import githubRaw from "./svg/plein/reseaux/github.svg?raw";

import { LogoAhpIcon } from "./components/LogoAhpIcon";

import { GithubIcon } from "./components/ReseauIcon";

import mixIaRaw from "./svg/plein/ia/mixia.svg?raw";

import { MixIaIcon } from "./components/IaIcon";

export type IconStyle = "plein" | "contour";

export interface IconEntry {
  /** Identifiant unique (slug + style). */
  id: string;
  /** Slug technique du fichier SVG (ex. « alert »). */
  slug: string;
  /** Nom affiché dans la bibliothèque. */
  nom: string;
  /** Mots-clés supplémentaires pour la recherche. */
  motsCles: string[];
  style: IconStyle;
  categorie: CategorieId;
  /** Nom du composant exporté par djodev-icons. */
  composant: string;
  Component: ComponentType<IconProps>;
  /** Contenu brut du fichier SVG (utilisé pour les snippets). */
  svg: string;
  /** Chemin du fichier source dans le repo. */
  fichier: string;
}

export type CategorieId = "interface" | "navigation" | "alertes" | "utilisateur" | "cubic" | "lecteur_audio" | "corbeille" | "upload" | "logo" | "reseaux" | "ia";

export const CATEGORIES: { id: CategorieId; libelle: string }[] = [
  { id: "navigation", libelle: "Navigation" },
  { id: "interface", libelle: "Interface" },
  { id: "alertes", libelle: "Alertes" },
  { id: "utilisateur", libelle: "Utilisateur" },
  { id: "cubic", libelle: "Cubic" },
  { id: "lecteur_audio", libelle: "Lecteur Audio" },
  { id: "corbeille", libelle: "Corbeille" },
  { id: "upload", libelle: "Upload" },
  { id: "logo", libelle: "Logo" },
  { id: "reseaux", libelle: "Réseaux" },
  { id: "ia", libelle: "Intelligence Artificielle" },
];

interface IconSource {
  slug: string;
  nom: string;
  motsCles: string[];
  categorie: CategorieId;
  base: string;
  plein: { Component: ComponentType<IconProps>; svg: string };
  contour?: { Component: ComponentType<IconProps>; svg: string };
}

const SOURCES: IconSource[] = [
  {
    slug: "alert",
    nom: "Alert",
    motsCles: ["alerte", "warning", "attention", "danger"],
    categorie: "alertes",
    base: "Alert",
    plein: { Component: AlertPleinIcon, svg: alertPleinRaw },
    contour: { Component: AlertContourIcon, svg: alertContourRaw },
  },
  {
    slug: "home",
    nom: "Home",
    motsCles: ["accueil", "maison", "dashboard"],
    categorie: "navigation",
    base: "Home",
    plein: { Component: HomePleinIcon, svg: homePleinRaw },
    contour: { Component: HomeContourIcon, svg: homeContourRaw },
  },
  {
    slug: "search",
    nom: "Search",
    motsCles: ["recherche", "loupe", "filtrer"],
    categorie: "interface",
    base: "Search",
    plein: { Component: SearchPleinIcon, svg: searchPleinRaw },
    contour: { Component: SearchContourIcon, svg: searchContourRaw },
  },
  {
    slug: "user",
    nom: "User",
    motsCles: ["utilisateur", "profil", "compte", "avatar"],
    categorie: "utilisateur",
    base: "User",
    plein: { Component: UserPleinIcon, svg: userPleinRaw },
    contour: { Component: UserContourIcon, svg: userContourRaw },
  },
  {
    slug: "ballon-cubic",
    nom: "Ballon Cubic",
    motsCles: ["ballon", "cubic", "sport"],
    categorie: "cubic",
    base: "BallonCubic",
    plein: { Component: BallonCubicIcon, svg: ballonCubicRaw },
  },
  {
    slug: "bouche-cubic",
    nom: "Bouche Cubic",
    motsCles: ["bouche", "cubic", "audio"],
    categorie: "cubic",
    base: "BoucheCubic",
    plein: { Component: BoucheCubicIcon, svg: boucheCubicRaw },
  },
  {
    slug: "camera-cubic",
    nom: "Camera Cubic",
    motsCles: ["camera", "cubic", "photo", "video"],
    categorie: "cubic",
    base: "CameraCubic",
    plein: { Component: CameraCubicIcon, svg: cameraCubicRaw },
  },
  {
    slug: "coeur-cubic",
    nom: "Coeur Cubic",
    motsCles: ["coeur", "cubic", "amour", "like"],
    categorie: "cubic",
    base: "CoeurCubic",
    plein: { Component: CoeurCubicIcon, svg: coeurCubicRaw },
  },
  {
    slug: "cube-cubic",
    nom: "Cube Cubic",
    motsCles: ["cube", "cubic", "3d"],
    categorie: "cubic",
    base: "CubeCubic",
    plein: { Component: CubeCubicIcon, svg: cubeCubicRaw },
  },
  {
    slug: "dl-cubic",
    nom: "DL Cubic",
    motsCles: ["dl", "cubic", "download", "telecharger"],
    categorie: "cubic",
    base: "DlCubic",
    plein: { Component: DlCubicIcon, svg: dlCubicRaw },
  },
  {
    slug: "fader-cubic",
    nom: "Fader Cubic",
    motsCles: ["fader", "cubic", "slider", "volume"],
    categorie: "cubic",
    base: "FaderCubic",
    plein: { Component: FaderCubicIcon, svg: faderCubicRaw },
  },
  {
    slug: "fleche-cubic",
    nom: "Fleche Cubic",
    motsCles: ["fleche", "cubic", "arrow", "direction"],
    categorie: "cubic",
    base: "FlecheCubic",
    plein: { Component: FlecheCubicIcon, svg: flecheCubicRaw },
  },
  {
    slug: "multi-cubic",
    nom: "Multi Cubic",
    motsCles: ["multi", "cubic", "multiple", "layers"],
    categorie: "cubic",
    base: "MultiCubic",
    plein: { Component: MultiCubicIcon, svg: multiCubicRaw },
  },
  {
    slug: "perso-cubic",
    nom: "Perso Cubic",
    motsCles: ["perso", "cubic", "personnage", "avatar"],
    categorie: "cubic",
    base: "PersoCubic",
    plein: { Component: PersoCubicIcon, svg: persoCubicRaw },
  },
  {
    slug: "photo-cubic",
    nom: "Photo Cubic",
    motsCles: ["photo", "cubic", "image", "galerie"],
    categorie: "cubic",
    base: "PhotoCubic",
    plein: { Component: PhotoCubicIcon, svg: photoCubicRaw },
  },
  {
    slug: "play-cubic",
    nom: "Play Cubic",
    motsCles: ["play", "cubic", "lecture", "video"],
    categorie: "cubic",
    base: "PlayCubic",
    plein: { Component: PlayCubicIcon, svg: playCubicRaw },
  },
  {
    slug: "play-fleche-cubic",
    nom: "Play Flèche",
    motsCles: ["play", "fleche", "cubic", "lecture", "video"],
    categorie: "cubic",
    base: "PlayFlecheCubic",
    plein: { Component: PlayFlecheCubicIcon, svg: playFlecheCubicRaw },
  },
  {
    slug: "sablier-cubic",
    nom: "Sablier Cubic",
    motsCles: ["sablier", "cubic", "temps", "attente"],
    categorie: "cubic",
    base: "SablierCubic",
    plein: { Component: SablierCubicIcon, svg: sablierCubicRaw },
  },
  {
    slug: "audio-cadrer",
    nom: "Audio C.",
    motsCles: ["audio", "cadrer", "lecteur", "son", "volume"],
    categorie: "lecteur_audio",
    base: "AudioCadrer",
    plein: { Component: AudioCadrerIcon, svg: audioCadrerRaw },
  },
  {
    slug: "boucle-cadrer",
    nom: "Boucle C.",
    motsCles: ["boucle", "cadrer", "lecteur", "repeat"],
    categorie: "lecteur_audio",
    base: "BoucleCadrer",
    plein: { Component: BoucleCadrerIcon, svg: boucleCadrerRaw },
  },
  {
    slug: "melange-cadrer",
    nom: "Mélange C.",
    motsCles: ["melange", "cadrer", "lecteur", "shuffle"],
    categorie: "lecteur_audio",
    base: "MelangeCadrer",
    plein: { Component: MelangeCadrerIcon, svg: melangeCadrerRaw },
  },
  {
    slug: "mute-cadrer",
    nom: "Mute C.",
    motsCles: ["mute", "cadrer", "lecteur", "son", "couper"],
    categorie: "lecteur_audio",
    base: "MuteCadrer",
    plein: { Component: MuteCadrerIcon, svg: muteCadrerRaw },
  },
  {
    slug: "pause-cadrer",
    nom: "Pause C.",
    motsCles: ["pause", "cadrer", "lecteur", "arreter"],
    categorie: "lecteur_audio",
    base: "PauseCadrer",
    plein: { Component: PauseCadrerIcon, svg: pauseCadrerRaw },
  },
  {
    slug: "play-cadrer",
    nom: "Play C.",
    motsCles: ["play", "cadrer", "lecteur", "lecture", "demarrer"],
    categorie: "lecteur_audio",
    base: "PlayCadrer",
    plein: { Component: PlayCadrerIcon, svg: playCadrerRaw },
  },
  {
    slug: "precedent-cadrer",
    nom: "Préc. C.",
    motsCles: ["precedent", "cadrer", "lecteur", "arriere"],
    categorie: "lecteur_audio",
    base: "PrecedentCadrer",
    plein: { Component: PrecedentCadrerIcon, svg: precedentCadrerRaw },
  },
  {
    slug: "suivant-cadrer",
    nom: "Suiv. C.",
    motsCles: ["suivant", "cadrer", "lecteur", "avant"],
    categorie: "lecteur_audio",
    base: "SuivantCadrer",
    plein: { Component: SuivantCadrerIcon, svg: suivantCadrerRaw },
  },
  {
    slug: "audio-neutre",
    nom: "Audio N.",
    motsCles: ["audio", "neutre", "lecteur", "son", "volume"],
    categorie: "lecteur_audio",
    base: "AudioNeutre",
    plein: { Component: AudioNeutreIcon, svg: audioNeutreRaw },
  },
  {
    slug: "boucle-neutre",
    nom: "Boucle N.",
    motsCles: ["boucle", "neutre", "lecteur", "repeat"],
    categorie: "lecteur_audio",
    base: "BoucleNeutre",
    plein: { Component: BoucleNeutreIcon, svg: boucleNeutreRaw },
  },
  {
    slug: "melange-neutre",
    nom: "Mélange N.",
    motsCles: ["melange", "neutre", "lecteur", "shuffle"],
    categorie: "lecteur_audio",
    base: "MelangeNeutre",
    plein: { Component: MelangeNeutreIcon, svg: melangeNeutreRaw },
  },
  {
    slug: "moin-neutre",
    nom: "Moins N.",
    motsCles: ["moin", "neutre", "lecteur", "moins", "volume"],
    categorie: "lecteur_audio",
    base: "MoinNeutre",
    plein: { Component: MoinNeutreIcon, svg: moinNeutreRaw },
  },
  {
    slug: "mute-neutre",
    nom: "Mute N.",
    motsCles: ["mute", "neutre", "lecteur", "son", "couper"],
    categorie: "lecteur_audio",
    base: "MuteNeutre",
    plein: { Component: MuteNeutreIcon, svg: muteNeutreRaw },
  },
  {
    slug: "pause-neutre",
    nom: "Pause N.",
    motsCles: ["pause", "neutre", "lecteur", "arreter"],
    categorie: "lecteur_audio",
    base: "PauseNeutre",
    plein: { Component: PauseNeutreIcon, svg: pauseNeutreRaw },
  },
  {
    slug: "play-neutre",
    nom: "Play N.",
    motsCles: ["play", "neutre", "lecteur", "lecture", "demarrer"],
    categorie: "lecteur_audio",
    base: "PlayNeutre",
    plein: { Component: PlayNeutreIcon, svg: playNeutreRaw },
  },
  {
    slug: "plus-neutre",
    nom: "Plus N.",
    motsCles: ["plus", "neutre", "lecteur", "volume", "ajouter"],
    categorie: "lecteur_audio",
    base: "PlusNeutre",
    plein: { Component: PlusNeutreIcon, svg: plusNeutreRaw },
  },
  {
    slug: "precedent-neutre",
    nom: "Préc. N.",
    motsCles: ["precedent", "neutre", "lecteur", "arriere"],
    categorie: "lecteur_audio",
    base: "PrecedentNeutre",
    plein: { Component: PrecedentNeutreIcon, svg: precedentNeutreRaw },
  },
  {
    slug: "suivant-neutre",
    nom: "Suiv. N.",
    motsCles: ["suivant", "neutre", "lecteur", "avant"],
    categorie: "lecteur_audio",
    base: "SuivantNeutre",
    plein: { Component: SuivantNeutreIcon, svg: suivantNeutreRaw },
  },
  {
    slug: "delete-track-neutre",
    nom: "Del. Track",
    motsCles: ["delete", "track", "neutre", "lecteur", "supprimer"],
    categorie: "lecteur_audio",
    base: "DeleteTrackNeutre",
    plein: { Component: DeleteTrackNeutreIcon, svg: deleteTrackNeutreRaw },
  },
  {
    slug: "eq-neutre",
    nom: "EQ N.",
    motsCles: ["eq", "equalizer", "neutre", "lecteur", "audio"],
    categorie: "lecteur_audio",
    base: "EqNeutre",
    plein: { Component: EqNeutreIcon, svg: eqNeutreRaw },
  },
  {
    slug: "corbeille01",
    nom: "Corb. 01",
    motsCles: ["corbeille", "poubelle", "supprimer", "delete", "trash"],
    categorie: "corbeille",
    base: "Corbeille01",
    plein: { Component: Corbeille01Icon, svg: corbeille01Raw },
  },
  {
    slug: "corbeille02",
    nom: "Corb. 02",
    motsCles: ["corbeille", "poubelle", "supprimer", "delete", "trash"],
    categorie: "corbeille",
    base: "Corbeille02",
    plein: { Component: Corbeille02Icon, svg: corbeille02Raw },
  },
  {
    slug: "corbeille03",
    nom: "Corb. 03",
    motsCles: ["corbeille", "poubelle", "supprimer", "delete", "trash"],
    categorie: "corbeille",
    base: "Corbeille03",
    plein: { Component: Corbeille03Icon, svg: corbeille03Raw },
  },
  {
    slug: "corbeille04",
    nom: "Corb. 04",
    motsCles: ["corbeille", "poubelle", "supprimer", "delete", "trash"],
    categorie: "corbeille",
    base: "Corbeille04",
    plein: { Component: Corbeille04Icon, svg: corbeille04Raw },
  },
  {
    slug: "corbeille05",
    nom: "Corb. 05",
    motsCles: ["corbeille", "poubelle", "supprimer", "delete", "trash"],
    categorie: "corbeille",
    base: "Corbeille05",
    plein: { Component: Corbeille05Icon, svg: corbeille05Raw },
  },
  {
    slug: "upload-images01",
    nom: "Upload 01",
    motsCles: ["upload", "images", "telecharger", "envoyer"],
    categorie: "upload",
    base: "UploadImages01",
    plein: { Component: UploadImages01Icon, svg: uploadImages01Raw },
  },
  {
    slug: "upload-images02",
    nom: "Upload 02",
    motsCles: ["upload", "images", "telecharger", "envoyer"],
    categorie: "upload",
    base: "UploadImages02",
    plein: { Component: UploadImages02Icon, svg: uploadImages02Raw },
  },
  {
    slug: "upload-images03",
    nom: "Upload 03",
    motsCles: ["upload", "images", "telecharger", "envoyer"],
    categorie: "upload",
    base: "UploadImages03",
    plein: { Component: UploadImages03Icon, svg: uploadImages03Raw },
  },
  {
    slug: "logo-ahp",
    nom: "Logo AHP",
    motsCles: ["logo", "ahp", "marque", "brand"],
    categorie: "logo",
    base: "LogoAhp",
    plein: { Component: LogoAhpIcon, svg: logoAhpRaw },
  },
  {
    slug: "github",
    nom: "GitHub",
    motsCles: ["github", "reseaux", "social", "code", "git"],
    categorie: "reseaux",
    base: "Github",
    plein: { Component: GithubIcon, svg: githubRaw },
  },
  {
    slug: "mixia",
    nom: "MixIa",
    motsCles: ["ia", "intelligence artificielle", "ai", "mixia", "robot"],
    categorie: "ia",
    base: "MixIa",
    plein: { Component: MixIaIcon, svg: mixIaRaw },
  },
];

/** Liste complète des icônes disponibles, un enregistrement par couple nom/style. */
export const ICONES: IconEntry[] = SOURCES.flatMap((source) => {
  const styles: IconStyle[] = ["plein"];
  if (source.contour) {
    styles.push("contour");
  }
  return styles.map((style) => {
    const styleData = style === "plein" ? source.plein : source.contour;
    return {
      id: `${source.slug}-${style}`,
      slug: source.slug,
      nom: source.nom,
      motsCles: source.motsCles,
      style,
      categorie: source.categorie,
      composant: `${source.base}${style === "plein" ? "Plein" : "Contour"}Icon`,
      Component: styleData!.Component,
      svg: styleData!.svg.trim(),
      fichier: `src/icons/svg/${style}/${source.slug}.svg`,
    };
  });
});

export const LIBELLE_STYLE: Record<IconStyle, string> = {
  plein: "Plein",
  contour: "Contour",
};
