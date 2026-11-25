import type { Metadata } from "next";
import { AnalyticsConsent } from "./_components/AnalyticsConsent";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laterrasse.co.ke"),
  title: "La Terrasse Diani Beach | French Dining by the Kenyan Coast",
  description: "French-inspired dining, piano bar and La Réserve whisky & cigar lounge in Diani Beach, Kenya.",
  openGraph: { title: "La Terrasse Diani Beach", description: "The art of lingering — French-inspired dining by the Kenyan coast.", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "La Terrasse Diani Beach", description: "The art of lingering — French-inspired dining by the Kenyan coast.", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<AnalyticsConsent /></body>
    </html>
  );
}
