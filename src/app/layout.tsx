import type { Metadata } from "next";
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import {
  Tektur,
  Plus_Jakarta_Sans,
  Audiowide,
  Electrolize,
  IBM_Plex_Mono,
  Hanken_Grotesk,
  Chakra_Petch,
  Space_Mono,
} from "next/font/google";
import "./globals.css";

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-tektur",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-audiowide",
  display: "swap",
});

const electrolize = Electrolize({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-electrolize",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIS Portal",
  description: "AI Society at UT Dallas — member portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${tektur.variable} ${jakarta.variable} ${audiowide.variable} ${electrolize.variable} ${ibmPlexMono.variable} ${hanken.variable} ${chakra.variable} ${spaceMono.variable} font-body antialiased`}
      >
        <ClerkProvider>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton>
                <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </header>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
