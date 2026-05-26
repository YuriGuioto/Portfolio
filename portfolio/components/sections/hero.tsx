'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Code2, Link2, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/portfolio';
import { SOCIAL_LINKS } from '@/lib/constants';
import { fadeInUp } from '@/lib/animations';

const socialLinks = [
  { icon: Code2, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: Link2, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
  { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br dark:from-black dark:via-zinc-950 dark:to-red-950/20 from-white via-gray-50 to-red-50/20" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 hero-grid" />
      
      {/* Content */}
      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient">
                {personalInfo.role}
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto"
              >
                <a href="#projects">Ver Projetos</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-zinc-300 dark:border-white/20 hover:bg-zinc-100 dark:hover:bg-white/5 w-full sm:w-auto"
              >
                <a href="#contact">Entrar em Contato</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-4"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass glass-hover flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
