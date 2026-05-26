'use client';

import { Code2, Link2, Mail, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const socialLinks = [
  { icon: Code2, href: SOCIAL_LINKS.github, label: 'GitHub' },
  { icon: Link2, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${SOCIAL_LINKS.email}`, label: 'Email' },
  { icon: MessageCircle, href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp' },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10 py-12">
      <div className="container mx-auto container-padding">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Nome */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gradient mb-2">Yuri Guioto</h3>
            <p className="text-sm text-muted-foreground">
              Desenvolvedor Front-End
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Yuri Guioto. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
