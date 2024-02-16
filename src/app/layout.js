import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-toggle-button/theme-provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curtains & Drapes",
  description: "One stop home goods store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
        <ToastContainer />
        <Toaster />
      </body>
    </html>
  );
}
