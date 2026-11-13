import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans")}
      style={{ backgroundColor: '#ffffff', colorScheme: 'light' }}
    >
      <body className="bg-white text-[#1d1d1f] overflow-x-hidden min-h-screen m-0 p-0" style={{ backgroundColor: '#ffffff' }}>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
