import React from "react";

// Standard 0.5px line weight customizable SVG Icons for Ismat Shaadi Services

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

export const BiometricIcon: React.FC<IconProps> = ({ size = 24, color = "#D4AF37", ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="0.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12" />
    <path d="M5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12" />
    <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12" />
    <circle cx="12" cy="12" r="1" fill={color} />
    <path d="M12 15V22" />
    <path d="M9 19H15" />
  </svg>
);

export const RingMatrixIcon: React.FC<IconProps> = ({ size = 24, color = "#D4AF37", ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="0.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="8" cy="14" r="5" />
    <circle cx="16" cy="14" r="5" fill="none" />
    <path d="M12 9V3" />
    <path d="M9 6H15" />
    <path d="M12 14A2 2 0 0 1 12 14" />
  </svg>
);

export const GateVaultIcon: React.FC<IconProps> = ({ size = 24, color = "#D4AF37", ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="0.75" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1.5" fill={color} />
    <path d="M12 17.5V19" />
  </svg>
);

export const VerifiedSealIcon: React.FC<IconProps> = ({ size = 32, color = "#D4AF37", ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.25"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="animate-pulse"
    {...props}
  >
    <path d="M12 2L15 5H19V9L22 12L19 15V19H15L12 22L9 19H5V15L2 12L5 9V5H9L12 2Z" fill="rgba(212, 175, 55, 0.05)" />
    <path d="M9 12L11 14L15 10" strokeWidth="1.5" />
  </svg>
);
