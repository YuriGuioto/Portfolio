'use client';

import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/fade-in';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code2, Link2, Mail, MessageCircle, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: SOCIAL_LINKS.email,
    href: `mailto:${SOCIAL_LINKS.email}`,
    color: 'text-blue-400',
  },
  {
    icon: Link2,
    label: 'LinkedIn',
    value: 'Conecte-se comigo',
    href: SOCIAL_LINKS.linkedin,
    color: 'text-blue-500',
  },
  {
    icon: Code2,
    label: 'GitHub',
    value: 'Veja meus projetos',
    href: SOCIAL_LINKS.github,
    color: 'text-purple-400',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Envie uma mensagem',
    href: SOCIAL_LINKS.whatsapp,
    color: 'text-green-400',
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Vamos Construir Algo <span className="text-gradient">Juntos?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="glass glass-hover p-6 h-full transition-all group-hover:scale-[1.02]">
                      <div className="flex items-start gap-4">
                        <div className={`${method.color} mt-1`}>
                          <Icon size={28} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            {method.label}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {method.value}
                          </p>
                        </div>
                        <Send
                          size={18}
                          className="text-muted-foreground group-hover:text-red-500 transition-colors"
                        />
                      </div>
                    </Card>
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Card */}
          <FadeIn>
            <Card className="glass p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Tem um projeto em mente?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Seja para criar uma landing page moderna, desenvolver uma aplicação web
                ou melhorar seu projeto existente, estou pronto para ajudar.
              </p>
              <a href={`mailto:${SOCIAL_LINKS.email}`}>
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <Mail size={20} className="mr-2" />
                  Enviar Email
                </Button>
              </a>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
