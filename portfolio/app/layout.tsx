import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CursorSpiral } from "@/components/ui/cursor-spiral";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yuri Guioto | Desenvolvedor Front-End",
  description: "Portfólio profissional de Yuri Guioto - Desenvolvedor Front-End especializado em React, Next.js, TypeScript e interfaces modernas.",
  keywords: ["desenvolvedor", "front-end", "react", "next.js", "typescript", "tailwind", "web developer"],
  authors: [{ name: "Yuri Guioto" }],
  creator: "Yuri Guioto",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://yuriguioto.com",
    title: "Yuri Guioto | Desenvolvedor Front-End",
    description: "Desenvolvedor Front-End especializado em interfaces modernas, responsivas e experiências intuitivas.",
    siteName: "Yuri Guioto Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuri Guioto | Desenvolvedor Front-End",
    description: "Desenvolvedor Front-End especializado em interfaces modernas, responsivas e experiências intuitivas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <LoadingScreen />
        <CursorSpiral />
        {children}
      </body>
    </html>
  );
}
