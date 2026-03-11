/**
 * Design Tokens — source de vérité pour tous les styles
 *
 * Usage dans un composant :
 *   import { colors, spacing, typography } from "../styles/tokens";
 *   style={{ color: colors.primary, padding: spacing[4] }}
 *
 * Modifier ces valeurs pour adapter le design à votre projet.
 */

export const colors = {
  // Marque — à personnaliser
  primary: "#16213e",
  primaryLight: "#1a2a50",
  primaryDark: "#0d1526",
  accent: "#0a9396",
  accentLight: "#94d2bd",

  // Sémantiques
  success: "#2a9d8f",
  warning: "#e9c46a",
  error: "#e76f51",
  info: "#457b9d",

  // Neutres
  white: "#ffffff",
  black: "#000000",
  gray: {
    50: "#f8f9fa",
    100: "#f1f3f5",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#868e96",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },

  // Texte
  text: {
    primary: "#1a1a2e",
    secondary: "#495057",
    muted: "#868e96",
    inverse: "#ffffff",
  },

  // Fonds
  bg: {
    page: "#ffffff",
    subtle: "#f8f9fa",
    muted: "#f1f3f5",
  },

  // Bordures
  border: {
    light: "#e9ecef",
    default: "#dee2e6",
    strong: "#adb5bd",
  },
};

export const typography = {
  // Familles
  fontFamily: {
    sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    mono: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
  },

  // Tailles (rem)
  fontSize: {
    xs: "0.75rem",    // 12px
    sm: "0.875rem",   // 14px
    base: "1rem",     // 16px
    lg: "1.125rem",   // 18px
    xl: "1.25rem",    // 20px
    "2xl": "1.5rem",  // 24px
    "3xl": "1.875rem",// 30px
    "4xl": "2.25rem", // 36px
  },

  // Graisses
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Hauteurs de ligne
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
};

// Espacement — multiples de 4px
export const spacing = {
  0: "0",
  1: "0.25rem",  // 4px
  2: "0.5rem",   // 8px
  3: "0.75rem",  // 12px
  4: "1rem",     // 16px
  5: "1.25rem",  // 20px
  6: "1.5rem",   // 24px
  8: "2rem",     // 32px
  10: "2.5rem",  // 40px
  12: "3rem",    // 48px
  16: "4rem",    // 64px
  20: "5rem",    // 80px
  24: "6rem",    // 96px
};

export const radii = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  full: "9999px",
};

export const shadows = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
  md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
  lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
  xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 300,
  modal: 400,
  toast: 500,
};

// Export groupé pour import unique
const tokens = { colors, typography, spacing, radii, shadows, breakpoints, zIndex };
export default tokens;
