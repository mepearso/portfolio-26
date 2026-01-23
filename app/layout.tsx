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
  title: "Megan Pearson - Engineering and Product Leader",
  description:
    "Engineering + product leader with 10+ years of experience. Focused on building useful, scalable, and private AI.",
  authors: [{ name: "Megan Pearson" }],
  openGraph: {
    title: "Megan Pearson - Engineering + Product Leader",
    description:
      "Engineering + product leader with 10+ years of experience. Focused on building useful, scalable, and private AI.",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stix.variable} ${stixItalic.variable} antialiased bg-cover bg-center bg-no-repeat bg-fixed h-full`}
      >
        {/* <SubtleGradient> */}
        <div className="content-container flex items-center justify-center min-h-screen pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
          {children}
        </div>
        {/* </SubtleGradient> */}
      </body>
    </html>
  );
}
