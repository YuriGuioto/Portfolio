export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;

export const COLORS = {
  primary: {
    red: '#EF4444', // red-500
    darkRed: '#DC2626', // red-600
  },
  neutral: {
    black: '#000000',
    white: '#FFFFFF',
    gray: {
      50: '#FAFAFA',
      100: '#F4F4F5',
      800: '#27272A',
      900: '#18181B',
      950: '#09090B',
    },
  },
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/yuriguioto',
  linkedin: 'https://linkedin.com/in/yuriguioto',
  email: 'yuriluft@hotmail.com',
  whatsapp: 'https://wa.me/5516992550556',
} as const;
