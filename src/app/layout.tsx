import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: {
    default: "Viswajit Electrical & Lighting | Professional Lighting Design & Electrical Contractor",
    template: "%s | Viswajit Electrical & Lighting",
  },
  description:
    "Professional lighting design, 2D planning, 3D visualization and electrical contracting across North India. Design. Visualize. Execute.",
  keywords: [
    "lighting contractor",
    "electrical contractor",
    "2D lighting design",
    "3D lighting visualization",
    "architectural lighting",
    "interior lighting",
    "electrical contractor Lucknow",
    "lighting design India",
    "turnkey electrical project",
    "lighting contractor UP",
  ],
  authors: [{ name: "Viswajit Electrical & Lighting" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://viswajitelectrical.com",
    siteName: "Viswajit Electrical & Lighting",
    title: "Viswajit Electrical & Lighting | Professional Lighting Design & Electrical Contractor",
    description:
      "Professional lighting design, 2D planning, 3D visualization and turnkey electrical contracting across North India.",
    images: [
      {
        url: "/images/hero_bg.jpg",
        width: 1200,
        height: 630,
        alt: "Viswajit Electrical & Lighting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viswajit Electrical & Lighting",
    description: "Professional Lighting Design & Electrical Contractor",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
                document.documentElement.classList.add(theme);
              } catch(e) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased bg-zinc-950 text-zinc-100 selection:bg-amber-500 selection:text-black min-h-screen w-full overflow-x-hidden">
        <ThemeProvider>
          <ScrollProgress />
          <CursorSpotlight />
          <Navbar />
          <main className="min-h-screen w-full overflow-x-hidden">{children}</main>
          <Footer />
          <MobileStickyBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
