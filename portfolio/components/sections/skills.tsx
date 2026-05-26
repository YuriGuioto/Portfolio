'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { skills } from '@/data/skills';
import { Card } from '@/components/ui/card';
import { fadeInUp } from '@/lib/animations';

const categoryLabels = {
  frontend: 'Frontend',
  ui: 'UI & Styling',
  tools: 'Ferramentas',
};

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto container-padding">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Tecnologias & <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ferramentas e tecnologias que utilizo no dia a dia
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto space-y-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category}>
              <FadeIn>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  {categoryLabels[category as keyof typeof skills]}
                </h3>
              </FadeIn>

              <StaggerContainer>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {skillList.map((skill) => (
                    <motion.div key={skill.name} variants={fadeInUp}>
                      <Card className="glass glass-hover p-6 text-center group">
                        <div className="mb-4">
                          <div className="w-16 h-16 mx-auto rounded-full bg-red-500/10 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                            {/* Icon placeholder - você pode adicionar ícones SVG aqui */}
                            <span className="text-red-500 font-bold">
                              {skill.name.charAt(0)}
                            </span>
                          </div>
                        </div>

                        <h4 className="text-foreground font-semibold mb-3">
                          {skill.name}
                        </h4>

                        {/* Skill Level Bar */}
                        <div className="relative w-full h-2 dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                          />
                        </div>

                        <p className="text-xs text-muted-foreground mt-2">
                          {skill.level}%
                        </p>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
