import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

// Font configuration
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AllPhotoEditing - Professional Photo Enhancement Services",
  description: "AI-powered photo editing services for real estate, professional photographers, and businesses.",
  keywords: "photo editing, real estate photography, image enhancement, virtual staging, AI photo editing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
