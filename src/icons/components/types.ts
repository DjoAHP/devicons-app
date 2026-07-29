import type { SVGProps } from "react";

/**
 * Props communes à toutes les icônes @djodev-icons.
 * `currentColor` est utilisé partout : la couleur vient donc du `color` CSS parent.
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
}

/** Attributs partagés par les icônes de style « Plein ». */
export const pleinBaseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
} as const;

/** Attributs partagés par les icônes de style « Contour ». */
export const contourBaseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;
