import type { Metadata } from "next";
import { STIX_Two_Text } from "next/font/google";
import "./globals.css";

const stix = STIX_Two_Text({
  variable: "--font-stix",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const stixItalic = STIX_Two_Text({
  variable: "--font-stix-italic",
  subsets: ["latin"],
  weight: "variable",
  style: "italic",
  display: "swap",
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
        className={`${stix.variable} ${stixItalic.variable} antialiased bg-cover bg-center bg-no-repeat bg-fixed`}
      >
        {/* <SubtleGradient> */}
        <div className="content-container flex items-center justify-center h-screen">
          {children}
        </div>
        {/* </SubtleGradient> */}
      </body>
    </html>
  );
}
