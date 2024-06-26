import { Noto_Sans } from "next/font/google";

export const metadata = {
  title: "Krishnaveni Ashraya Dhama",
  description: "Krishnaveni Ashraya Dhama",
};

const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${notoSans.variable} scroll-smooth scroll-pt-12`}>
      <body>{children}</body>
    </html>
  );
}
