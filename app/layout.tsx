import type { Metadata } from "next";
import { Bricolage_Grotesque, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-headings",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// const crimsonPro = Crimson_Pro({
//   variable: "--font-body",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

const stix = STIX_Two_Text({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
        className={`${bricolageGrotesque.variable} ${stix.variable} antialiased bg-cover bg-center bg-no-repeat bg-fixed`}
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
