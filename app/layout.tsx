import type { Metadata } from "next";
import { Schibsted_Grotesk, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Megan Pearson - Strategic Engineering",
  description:
    "Engineering Leader with 20+ years of experience. Focused on building useful, scalable, and private AI.",
  keywords: [
    "AI Leadership",
    "Engineering Management",
    "AI Security",
    "Cross-platform Teams",
    "AI Infrastructure",
    "Privacy",
    "Data Security",
  ],
  authors: [{ name: "Megan Pearson" }],
  openGraph: {
    title: "Megan Pearson - Strategic Engineering",
    description:
      "Engineering Leader with 20+ years of experience. Focused on building useful, scalable, and private AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSerif4.variable} ${schibstedGrotesk.variable} layout antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
