import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/Menu";
import { LanguageProvider } from "@/context/LanguageContext";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";

export const metadata: Metadata = {
  title: "André Luiz",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="h-screen overflow-hidden bg-[#050505] text-white">
        <LanguageProvider>
          <ActiveSectionProvider>
            <Menu />
            <main className="h-full">{children}</main>
          </ActiveSectionProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
