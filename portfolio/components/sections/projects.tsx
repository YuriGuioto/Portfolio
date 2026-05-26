'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { projects } from '@/data/projects';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Code2, ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

type ProjectCategory = 'all' | 'professional' | 'personal';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const allProjects = [
    ...projects.professional.map((p) => ({ ...p, category: 'professional' as const })),
    ...projects.personal.map((p) => ({ ...p, category: 'personal' as const })),
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const hasResults = filteredProjects.length > 0;

  return (
    <section id="projects" className="section-padding section-alt">
      <div className="container mx-auto container-padding">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meus <span className="text-gradient">Projetos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Uma seleção dos meus trabalhos mais recentes e relevantes
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('all')}
                className={
                  activeCategory === 'all'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'border-zinc-300 dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/5'
                }
              >
                Todos
              </Button>
              <Button
                variant={activeCategory === 'professional' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('professional')}
                className={
                  activeCategory === 'professional'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'border-zinc-300 dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/5'
                }
              >
                Profissionais
              </Button>
              <Button
                variant={activeCategory === 'personal' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('personal')}
                className={
                  activeCategory === 'personal'
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'border-zinc-300 dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/5'
                }
              >
                Pessoais
              </Button>
            </div>
          </div>
        </FadeIn>

        <StaggerContainer key={activeCategory}>
          {hasResults ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Card className="glass overflow-hidden h-full flex flex-col group hover:scale-[1.02] transition-transform">
                    {/* Project Image */}
                    <div className="aspect-video relative overflow-hidden bg-zinc-900 -mt-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Status Badge */}
                      <Badge
                        className="mb-3 w-fit"
                        variant={
                          project.status === 'Publicado' ? 'default' : 'secondary'
                        }
                      >
                        {project.status}
                      </Badge>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-border"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs border-border">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 group relative flex items-center justify-center gap-2 overflow-hidden rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-shadow duration-300 hover:shadow-lg hover:shadow-red-500/25"
                          >
                            <span className="absolute inset-0 -translate-x-full bg-red-700 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                            <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
                              Ver Projeto
                            </span>
                            <ArrowRight
                              size={14}
                              className="relative z-10 translate-x-3 opacity-0 shrink-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center rounded-md border border-zinc-300 px-3 py-2 transition-colors duration-200 hover:bg-zinc-100 dark:border-white/20 dark:hover:bg-white/5"
                          >
                            <Code2
                              size={16}
                              className="text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-muted-foreground py-12">
              Nenhum projeto encontrado para este filtro.
            </div>
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
