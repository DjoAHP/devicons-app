import { contourBaseProps, pleinBaseProps, type IconProps } from "./types";

/** Icône « Utilisateur » — style Plein. */
export const UserPleinIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...pleinBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M12 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 10.5c4.14 0 7.5 2.35 7.5 5.25 0 .69-.56 1.25-1.25 1.25H5.75c-.69 0-1.25-.56-1.25-1.25 0-2.9 3.36-5.25 7.5-5.25Z" />
  </svg>
);

/** Icône « Utilisateur » — style Contour. */
export const UserContourIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...contourBaseProps} className={className} width={width} height={height} {...props}>
    <circle cx="12" cy="7.75" r="3.75" />
    <path d="M4.75 19.25c0-2.9 3.25-5 7.25-5s7.25 2.1 7.25 5" />
  </svg>
);
