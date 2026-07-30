import type { IconProps } from "./types";

const interfaceBaseProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
} as const;

export const InfosIcon = ({ className, width = 24, height = 24, ...props }: IconProps) => (
  <svg {...interfaceBaseProps} className={className} width={width} height={height} {...props}>
    <path d="M10.61,16.3c-.32.32-.49.71-.49,1.18s.16.85.49,1.17c.32.32.72.49,1.17.49s.86-.16,1.18-.49c.32-.32.48-.72.48-1.17s-.16-.85-.48-1.17c-.64-.64-1.7-.65-2.34,0Z"/>
    <path d="M15.09,5.88c-.66-.54-1.57-.84-2.71-.88h-.56s0,0,0,0c-.87.03-1.69.23-2.45.58-.84.39-1.51.92-1.97,1.57l-.13.19,1.66,1.72.2-.24c.37-.45.83-.82,1.35-1.09,1.01-.52,2.2-.52,2.73-.08.24.2.36.49.36.87s-.11.71-.33,1.04c-.23.33-.58.65-1.05.94-.55.35-.96.78-1.24,1.29-.28.51-.42,1.1-.42,1.76v1.17h2.38v-1.04c0-.32.08-.59.25-.86.17-.27.45-.53.81-.77.72-.46,1.27-1,1.63-1.6.37-.6.56-1.29.56-2.03,0-1.08-.37-1.93-1.1-2.54Z"/>
    <circle cx="12" cy="12" r="10.05" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="2.24"/>
  </svg>
);
