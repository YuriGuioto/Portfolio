'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';
import { StaggerContainer } from '@/components/animations/stagger-container';
import { differentials } from '@/data/portfolio';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export function Differentials() {
  return (
    <section id="differentials" className="section-padding section-alt">
      <div className="container mx-auto container-padding">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Meus <span className="text-gradient">Diferenciais</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {differentials.map((diff) => (
              <motion.div key={diff.id} variants={fadeInUp}>
                <Card className="glass glass-hover p-6 h-full">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                      <Check size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
