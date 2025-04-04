import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/provider/theme.provider";
import { ConvexClientProvider } from "@/components/provider/convex-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/logo.svg",
        href: "/logo.svg"
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.className}
      >
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme-2"
          >
            {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
