import { contourBaseProps, pleinBaseProps, type IconProps } from "./types";

/** Icône « Alerte » — style Plein. */
export const AlertPleinIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...pleinBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M12.87 2.75a1 1 0 0 0-1.74 0L1.4 19.5A1 1 0 0 0 2.27 21h19.46a1 1 0 0 0 .87-1.5L12.87 2.75ZM12 8.25a1 1 0 0 1 1 1v4.5a1 1 0 1 1-2 0v-4.5a1 1 0 0 1 1-1Zm0 8a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
  </svg>
);

/** Icône « Alerte » — style Contour. */
export const AlertContourIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...contourBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M12.87 3.25a1 1 0 0 0-1.74 0L1.9 19.5a1 1 0 0 0 .87 1.5h18.46a1 1 0 0 0 .87-1.5L12.87 3.25Z" />
    <path d="M12 9.5v4.25" />
    <path d="M12 17.25h.01" />
  </svg>
);
