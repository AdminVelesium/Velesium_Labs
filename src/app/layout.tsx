import type { Metadata } from "next";
import "./globals.css";
import {
  Inter,
  DM_Sans,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Poppins,
  Playfair_Display_SC,
} from "next/font/google";
import ClientLayout from "@/components/ui/ClientLayout";
import { Analytics } from "@vercel/analytics/next";
const playfairSC = Playfair_Display_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-now-outline",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dm",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Velesium Labs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfairSC.variable} ${inter.variable} ${dmSans.variable} ${playfair.variable} ${jakarta.variable} ${poppins.variable} cursor-none`}
      >
        <ClientLayout>
          {children}
          <Analytics />
        </ClientLayout>
      </body>
    </html>
  );
}
