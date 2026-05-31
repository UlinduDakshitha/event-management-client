import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Troubled Waters: Sailing with AI in Supply Chain | AccelAlpha × Oracle",
  description:
    "A premier executive summit exploring AI-driven supply chain transformation. Join industry leaders from Oracle and Accelalpha.",
  openGraph: {
    title: "Troubled Waters: Sailing with AI in Supply Chain",
    description: "Executive Summit by AccelAlpha & Oracle",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body bg-navy-950 text-white antialiased">
        <header className="w-full bg-white py-4">
          <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
            <div className="text-2xl font-bold text-coral">accelalpha</div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="font-bold text-red-500">ORACLE</div>
              <div className="text-slate-500">|</div>
              <div className="text-slate-600">Partner</div>
            </div>
          </div>
        </header>

        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
