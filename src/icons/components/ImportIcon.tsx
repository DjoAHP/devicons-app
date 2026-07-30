import type { IconProps } from "./types";

const importBaseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: "2.62",
} as const;

export const FlecheBBasIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...importBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M1.53,14.72v5.77c0,.32.26.58.58.58h19.79c.32,0,.58-.26.58-.58v-5.77"/>
    <path d="M17.57,10.89l-5.52,5.52s-.08.03-.12,0l-5.52-5.52"/>
    <line x1="11.94" y1="16.4" x2="11.94" y2="2.94"/>
  </svg>
);

export const FlecheDDroiteIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...importBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M14.72,22.47h5.77c.32,0,.58-.26.58-.58V2.11c0-.32-.26-.58-.58-.58h-5.77"/>
    <path d="M10.89,6.43l5.52,5.52s.03.08,0,.12l-5.52,5.52"/>
    <line x1="16.4" y1="12.06" x2="2.94" y2="12.06"/>
  </svg>
);

export const FlecheGGaucheIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...importBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M9.28,1.53H3.51c-.32,0-.58.26-.58.58v19.79c0,.32.26.58.58.58h5.77"/>
    <path d="M13.11,17.57l-5.52-5.52s-.03-.08,0-.12l5.52-5.52"/>
    <line x1="7.6" y1="11.94" x2="21.06" y2="11.94"/>
  </svg>
);

export const FlecheHHautIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...importBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M22.47,9.28V3.51c0-.32-.26-.58-.58-.58H2.11c-.32,0-.58.26-.58.58v5.77"/>
    <path d="M6.43,13.11l5.52-5.52s.08-.03.12,0l5.52,5.52"/>
    <line x1="12.06" y1="7.6" x2="12.06" y2="21.06"/>
  </svg>
);
