import { contourBaseProps, type IconProps } from "./types";

/** Icône « Recherche » — style Contour. */
export const SearchIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...contourBaseProps} className={className} width={width} height={height} strokeWidth={3} strokeMiterlimit={10} {...props}>
    <circle cx="9.39" cy="9.39" r="6.95" />
    <line x1="14.31" y1="14.31" x2="21.56" y2="21.56" />
  </svg>
);
