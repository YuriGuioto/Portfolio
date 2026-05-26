'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { personalInfo } from '@/data/portfolio';
import { Card } from '@/components/ui/card';
import { Code, Users, Zap } from 'lucide-react';

const stats = [
  { icon: Code, label: 'Projetos Completos', value: '15+' },
  { icon: Users, label: 'Clientes Satisfeitos', value: '10+' },
  { icon: Zap, label: 'Anos de Experiência', value: '2+' },
];

export function About() {
  return (
    <section id="about" className="section-padding section-alt">
      <div className="container mx-auto container-padding">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Sobre <span className="text-gradient">Mim</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <SlideIn direction="left">
            <div className="space-y-6">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index} className="text-foreground/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="flex flex-wrap gap-3 pt-4">
                <div className="glass px-4 py-2 rounded-full text-sm text-foreground/80">
                  📍 {personalInfo.location}
                </div>
                <div className="glass px-4 py-2 rounded-full text-sm text-green-400">
                  ✓ {personalInfo.availability}
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Stats */}
          <SlideIn direction="right">
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="glass glass-hover p-6 text-center lg:text-left">
                      <div className="flex flex-col lg:flex-row items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                          <Icon size={24} />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-foreground mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
