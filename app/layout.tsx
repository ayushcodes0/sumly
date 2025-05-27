import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Sumly-AI-Powered PDF Summarization",
  description: "Save hours of reading time. Transform lengthy PDFs into clear, accurate summaries in seconds with our advance AI technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${fontSans.variable} font-sans antialiased`}
        >
          <div className="reletive flex min-h-screen flex-col">
            <Header/>
              <main className="flex-1">{children}</main>
            <Footer/>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
