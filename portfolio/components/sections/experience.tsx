'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { experiences } from '@/data/experience';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto container-padding">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Experiência <span className="text-gradient">Profissional</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <StaggerContainer>
            {experiences.map((exp) => (
              <motion.div key={exp.id} variants={fadeInUp}>
                <Card className="glass p-8 mb-6 hover:bg-zinc-100 dark:hover:bg-white/10 transition-all">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                        <Briefcase className="text-red-500" size={24} />
                        {exp.role}
                      </h3>
                      <p className="text-xl text-red-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6">{exp.description}</p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Responsabilidades
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-foreground/80"
                        >
                          <span className="text-red-500 mt-1">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                      Tecnologias
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="glass text-foreground/80"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
