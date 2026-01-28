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
  metadataBase: new URL("https://megans.website"),
  title: "Megan Pearson",
  description:
    "Engineering and product leader with 10+ years of experience. Focused on building useful, scalable, and sensible products.",
  authors: [{ name: "Megan Pearson" }],
  openGraph: {
    title: "Megan Pearson",
    description:
      "Engineering and product leader with 10+ years of experience. Focused on building useful, scalable, and sensible products.",
    type: "website",
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
        alt: "Megan Pearson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Megan Pearson",
    description:
      "Engineering and product leader with 10+ years of experience. Focused on building useful, scalable, and sensible products.",
    images: ["/og_image.jpg"],
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
        className={`${stix.variable} ${stixItalic.variable} antialiased bg-cover bg-center bg-no-repeat bg-fixed h-full`}
      >
        <main className="content-container flex items-center justify-center min-h-screen pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
          {children}
        </main>
      </body>
    </html>
  );
}
