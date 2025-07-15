import type { Metadata } from "next";
import '../app/globals.css';

export const metadata: Metadata = {
  title: {
    default: "Projeto Contra o Racismo",
    template: "%s | Anti-Racismo"
  },
  description: "Plataforma para registro e combate a incidentes racistas",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Projeto Contra o Racismo",
    description: "Denuncie, eduque-se e junte-se à luta por igualdade",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Projeto Contra o Racismo',
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 antialiased">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}