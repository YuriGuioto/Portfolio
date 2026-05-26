export const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
  ],
  ui: [
    { name: 'CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Bootstrap', level: 85 },
    { name: 'MudBlazor', level: 75 },
  ],
  tools: [
    { name: 'Git', level: 85 },
    { name: 'GitHub', level: 85 },
    { name: 'Figma', level: 80 },
    { name: 'VS Code', level: 90 },
  ],
} as const;

export type SkillCategory = keyof typeof skills;
