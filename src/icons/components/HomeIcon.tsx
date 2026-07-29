import { contourBaseProps, pleinBaseProps, type IconProps } from "./types";

/** Icône « Accueil » — style Plein. */
export const HomePleinIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...pleinBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M11.36 2.34a1 1 0 0 1 1.28 0l8.5 7.15a1 1 0 0 1 .36.77V20a1 1 0 0 1-1 1h-5.25a1 1 0 0 1-1-1v-4.5h-3.5V20a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1v-9.74a1 1 0 0 1 .36-.77l8.5-7.15Z" />
  </svg>
);

/** Icône « Accueil » — style Contour. */
export const HomeContourIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...contourBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M3.75 10.25 12 3.3l8.25 6.95V20a.75.75 0 0 1-.75.75h-4.75V15h-5.5v5.75H4.5a.75.75 0 0 1-.75-.75v-9.75Z" />
  </svg>
);
