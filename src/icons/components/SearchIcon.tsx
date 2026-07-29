import { contourBaseProps, pleinBaseProps, type IconProps } from "./types";

/** Icône « Recherche » — style Plein. */
export const SearchPleinIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...pleinBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M10.75 3a7.75 7.75 0 1 0 4.72 13.9l3.82 3.81a1 1 0 0 0 1.41-1.41l-3.81-3.82A7.75 7.75 0 0 0 10.75 3Zm0 2a5.75 5.75 0 1 1 0 11.5 5.75 5.75 0 0 1 0-11.5Z" />
  </svg>
);

/** Icône « Recherche » — style Contour. */
export const SearchContourIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...contourBaseProps} className={className} width={width} height={height} {...props}>
    <circle cx="10.75" cy="10.75" r="6.75" />
    <path d="m15.75 15.75 4.25 4.25" />
  </svg>
);
