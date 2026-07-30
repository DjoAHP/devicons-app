import type { ComponentType } from "react";

import alertContourRaw from "./svg/contour/alert.svg?raw";
import homeContourRaw from "./svg/contour/home.svg?raw";
import searchContourRaw from "./svg/contour/search.svg?raw";
import userContourRaw from "./svg/contour/user.svg?raw";
import alertPleinRaw from "./svg/plein/alert.svg?raw";
import homePleinRaw from "./svg/plein/home.svg?raw";
import userPleinRaw from "./svg/plein/user.svg?raw";

import {
  AlertContourIcon,
  AlertPleinIcon,
  HomeContourIcon,
  HomePleinIcon,
  SearchIcon,
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
  Corbeille06Icon,
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
import corbeille06Raw from "./svg/plein/corbeille/corbeille06.svg?raw";

import uploadImages01Raw from "./svg/plein/upload/upload-images01.svg?raw";
import uploadImages02Raw from "./svg/plein/upload/upload-images02.svg?raw";
import uploadImages03Raw from "./svg/plein/upload/upload-images03.svg?raw";

import logoAhpRaw from "./svg/plein/logo/logo-ahp.svg?raw";
import logoAhp02Raw from "./svg/plein/logo/logo-ahp02.svg?raw";

import githubRaw from "./svg/plein/reseaux/github.svg?raw";
import instaRaw from "./svg/plein/reseaux/insta.svg?raw";
import messengerRaw from "./svg/plein/reseaux/messenger.svg?raw";
import skypeRaw from "./svg/plein/reseaux/skype.svg?raw";
import xRaw from "./svg/plein/reseaux/x.svg?raw";
import driveRaw from "./svg/plein/reseaux/drive.svg?raw";
import facebookRaw from "./svg/plein/reseaux/facebook.svg?raw";
import googleRaw from "./svg/plein/reseaux/google.svg?raw";
import windowsRaw from "./svg/plein/reseaux/windows.svg?raw";
import lensRaw from "./svg/plein/reseaux/lens.svg?raw";

import { LogoAhpIcon, LogoAhp02Icon } from "./components/LogoAhpIcon";

import { GithubIcon, InstaIcon, MessengerIcon, SkypeIcon, XIcon, DriveIcon, FacebookIcon, GoogleIcon, WindowsIcon, LensIcon } from "./components/ReseauIcon";

import mixIaRaw from "./svg/plein/ia/mixia.svg?raw";

import { MixIaIcon } from "./components/IaIcon";

import {
  FlecheBBasIcon,
  FlecheDDroiteIcon,
  FlecheGGaucheIcon,
  FlecheHHautIcon,
} from "./components/ImportIcon";

import flecheBBasContourRaw from "./svg/contour/import/fleche-b.svg?raw";
import flecheDDroiteContourRaw from "./svg/contour/import/fleche-d.svg?raw";
import flecheGGaucheContourRaw from "./svg/contour/import/fleche-g.svg?raw";
import flecheHHautContourRaw from "./svg/contour/import/fleche-h.svg?raw";

import {
  ChronoIcon,
  DiapaIcon,
  DocvIcon,
  MetroIcon,
  SetlistIcon,
  StackIcon,
} from "./components/TonelabIcon";

import chronoRaw from "./svg/plein/tonelab/chrono.svg?raw";
import diapaRaw from "./svg/plein/tonelab/diapa.svg?raw";

import { InfosIcon } from "./components/InterfaceIcon";
import infosRaw from "./svg/plein/interface/infos.svg?raw";
import docvRaw from "./svg/plein/tonelab/docv.svg?raw";
import metroRaw from "./svg/plein/tonelab/metro.svg?raw";
import setlistRaw from "./svg/plein/tonelab/setlist.svg?raw";
import stackRaw from "./svg/plein/tonelab/stack.svg?raw";

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

export type CategorieId = "interface" | "navigation" | "alertes" | "utilisateur" | "cubic" | "lecteur_audio" | "corbeille" | "upload" | "logo" | "reseaux" | "ia" | "import" | "tonelab";

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
  { id: "import", libelle: "Import" },
  { id: "tonelab", libelle: "Tonelab" },
];

interface IconSource {
  slug: string;
  nom: string;
  motsCles: string[];
  categorie: CategorieId;
  base: string;
  plein?: { Component: ComponentType<IconProps>; svg: string };
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
    contour: { Component: SearchIcon, svg: searchContourRaw },
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
    slug: "corbeille06",
    nom: "Corb. 06",
    motsCles: ["corbeille", "poubelle", "supprimer", "delete", "trash"],
    categorie: "corbeille",
    base: "Corbeille06",
    plein: { Component: Corbeille06Icon, svg: corbeille06Raw },
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
    slug: "logo-ahp02",
    nom: "Logo AHP 02",
    motsCles: ["logo", "ahp", "marque", "brand", "v2"],
    categorie: "logo",
    base: "LogoAhp02",
    plein: { Component: LogoAhp02Icon, svg: logoAhp02Raw },
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
    slug: "insta",
    nom: "Instagram",
    motsCles: ["instagram", "insta", "reseaux", "social", "photo"],
    categorie: "reseaux",
    base: "Insta",
    plein: { Component: InstaIcon, svg: instaRaw },
  },
  {
    slug: "messenger",
    nom: "Messenger",
    motsCles: ["messenger", "facebook", "reseaux", "social", "chat"],
    categorie: "reseaux",
    base: "Messenger",
    plein: { Component: MessengerIcon, svg: messengerRaw },
  },
  {
    slug: "skype",
    nom: "Skype",
    motsCles: ["skype", "reseaux", "social", "appel", "video"],
    categorie: "reseaux",
    base: "Skype",
    plein: { Component: SkypeIcon, svg: skypeRaw },
  },
  {
    slug: "x",
    nom: "X",
    motsCles: ["x", "twitter", "reseaux", "social"],
    categorie: "reseaux",
    base: "X",
    plein: { Component: XIcon, svg: xRaw },
  },
  {
    slug: "drive",
    nom: "Drive",
    motsCles: ["drive", "google", "cloud", "stockage", "reseaux"],
    categorie: "reseaux",
    base: "Drive",
    plein: { Component: DriveIcon, svg: driveRaw },
  },
  {
    slug: "facebook",
    nom: "Facebook",
    motsCles: ["facebook", "fb", "reseaux", "social"],
    categorie: "reseaux",
    base: "Facebook",
    plein: { Component: FacebookIcon, svg: facebookRaw },
  },
  {
    slug: "google",
    nom: "Google",
    motsCles: ["google", "reseaux", "social", "recherche"],
    categorie: "reseaux",
    base: "Google",
    plein: { Component: GoogleIcon, svg: googleRaw },
  },
  {
    slug: "windows",
    nom: "Windows",
    motsCles: ["windows", "microsoft", "os", "reseaux"],
    categorie: "reseaux",
    base: "Windows",
    plein: { Component: WindowsIcon, svg: windowsRaw },
  },
  {
    slug: "lens",
    nom: "Lens",
    motsCles: ["lens", "google", "lentille", "ar", "realite augmentee", "reseaux"],
    categorie: "reseaux",
    base: "Lens",
    plein: { Component: LensIcon, svg: lensRaw },
  },
  {
    slug: "mixia",
    nom: "MixIa",
    motsCles: ["ia", "intelligence artificielle", "ai", "mixia", "robot"],
    categorie: "ia",
    base: "MixIa",
    plein: { Component: MixIaIcon, svg: mixIaRaw },
  },
  {
    slug: "fleche-bas",
    nom: "Flèche Bas",
    motsCles: ["fleche", "bas", "down", "arrow", "import", "direction"],
    categorie: "import",
    base: "FlecheBBas",
    contour: { Component: FlecheBBasIcon, svg: flecheBBasContourRaw },
  },
  {
    slug: "fleche-droite",
    nom: "Flèche Droite",
    motsCles: ["fleche", "droite", "right", "arrow", "import", "direction"],
    categorie: "import",
    base: "FlecheDDroite",
    contour: { Component: FlecheDDroiteIcon, svg: flecheDDroiteContourRaw },
  },
  {
    slug: "fleche-gauche",
    nom: "Flèche Gauche",
    motsCles: ["fleche", "gauche", "left", "arrow", "import", "direction"],
    categorie: "import",
    base: "FlecheGGauche",
    contour: { Component: FlecheGGaucheIcon, svg: flecheGGaucheContourRaw },
  },
  {
    slug: "fleche-haut",
    nom: "Flèche Haut",
    motsCles: ["fleche", "haut", "up", "arrow", "import", "direction"],
    categorie: "import",
    base: "FlecheHHaut",
    contour: { Component: FlecheHHautIcon, svg: flecheHHautContourRaw },
  },
  {
    slug: "chrono",
    nom: "Chrono",
    motsCles: ["chrono", "metronome", "bpm", "rythme", "tempo", "tonelab"],
    categorie: "tonelab",
    base: "Chrono",
    plein: { Component: ChronoIcon, svg: chronoRaw },
  },
  {
    slug: "diapa",
    nom: "Diapa",
    motsCles: ["diapa", "diapason", "tuner", "accordage", "tonelab"],
    categorie: "tonelab",
    base: "Diapa",
    plein: { Component: DiapaIcon, svg: diapaRaw },
  },
  {
    slug: "docv",
    nom: "DocV",
    motsCles: ["docv", "documentation", "livre", "manuel", "tonelab"],
    categorie: "tonelab",
    base: "Docv",
    plein: { Component: DocvIcon, svg: docvRaw },
  },
  {
    slug: "metro",
    nom: "Metro",
    motsCles: ["metro", "metronome", "rythme", "battement", "tonelab"],
    categorie: "tonelab",
    base: "Metro",
    plein: { Component: MetroIcon, svg: metroRaw },
  },
  {
    slug: "setlist",
    nom: "Setlist",
    motsCles: ["setlist", "liste", "morceaux", "playlist", "tonelab"],
    categorie: "tonelab",
    base: "Setlist",
    plein: { Component: SetlistIcon, svg: setlistRaw },
  },
  {
    slug: "stack",
    nom: "Stack",
    motsCles: ["stack", "pile", "effets", "pedales", "tonelab"],
    categorie: "tonelab",
    base: "Stack",
    plein: { Component: StackIcon, svg: stackRaw },
  },
  {
    slug: "infos",
    nom: "Infos",
    motsCles: ["info", "information", "aide", "question", "interface"],
    categorie: "interface",
    base: "Infos",
    plein: { Component: InfosIcon, svg: infosRaw },
  },
];

/** Liste complète des icônes disponibles, un enregistrement par couple nom/style. */
export const ICONES: IconEntry[] = SOURCES.flatMap((source) => {
  const styles: IconStyle[] = [];
  if (source.plein) styles.push("plein");
  if (source.contour) styles.push("contour");
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
