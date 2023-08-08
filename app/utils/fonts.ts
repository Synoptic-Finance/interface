import { Nunito_Sans, Inter } from "next/font/google";

export const nunitoSans = Nunito_Sans({
  weight: ["400", "600"],
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["400", "600"],
  variable: "--font-inter",
  subsets: ["latin"],
});
