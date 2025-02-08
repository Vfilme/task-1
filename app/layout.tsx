import "./globals.scss";
import styles from "./layout.module.scss";

import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <div className={styles.layout}>{children}</div>
      </body>
    </html>
  );
}
