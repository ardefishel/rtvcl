import type { Metadata } from "next";
import { Inter, Playfair_Display, Caveat, Space_Mono, JetBrains_Mono } from "next/font/google";
import { I18nProvider } from "@/lib/i18n-context";
import "./laughtrack.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laughtrack — The Comedian's Toolkit",
  description:
    "Write, organize, and perform your best material. The distraction-free notebook built for stand-up comedians.",
  openGraph: {
    title: "Laughtrack — The Comedian's Toolkit",
    description: "Write, organize, and perform your best material.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/laughtrack-favicon.png",
  },
};

export default function LaughtrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${inter.variable} ${playfairDisplay.variable} ${caveat.variable} ${spaceMono.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <I18nProvider>{children}</I18nProvider>
    </div>
  );
}
