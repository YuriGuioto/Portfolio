export const skills = {
  frontend: [
    { name: 'React', level: 90, icon: '/staksIcons/React-icon.svg.png' },
    { name: 'Next.js', level: 85, icon: '/staksIcons/nextjs_icon_132160.webp' },
    { name: 'JavaScript', level: 90, icon: '/staksIcons/javascript-logo-javascript-icon-transparent-free-png.webp' },
    { name: 'TypeScript', level: 80, icon: '/staksIcons/typescript_plain_logo_icon_146316.webp' },
  ],
  ui: [
    { name: 'CSS3', level: 95, icon: '/staksIcons/bootstrap-social-media-icons-html-css-js-logo-11563293145uql7yehdq3.png' },
    { name: 'Tailwind CSS', level: 90, icon: '/staksIcons/tailwind-css-logo-png_seeklogo-354675.png' },
    { name: 'Bootstrap', level: 85, icon: '/staksIcons/Bootstrap_logo.svg.png' },
    { name: 'MudBlazor', level: 75, icon: '/staksIcons/logo.png' },
  ],
  tools: [
    { name: 'Git', level: 85, icon: '/staksIcons/Git_icon.svg.png' },
    { name: 'GitHub', level: 85, icon: '/staksIcons/25231.png' },
    { name: 'Figma', level: 80, icon: '/staksIcons/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png' },
    { name: 'VS Code', level: 90, icon: '/staksIcons/Visual_Studio_Code_1.35_icon.svg.png' },
  ],
} as const;

export type SkillCategory = keyof typeof skills;
