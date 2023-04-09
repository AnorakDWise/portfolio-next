import "./globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const font = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Gregory Buffard",
  description:
    "Welcome to my professional portfolio. It's made with Next.js 13 and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body
        className={
          "m-auto bg-neutral-800 font-medium overflow-hidden select-none " +
          font.className
        }
      >
        {children}
      </body>
    </html>
  );
}
