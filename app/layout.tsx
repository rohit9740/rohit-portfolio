import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohit Vijay Darda — Data & Sustainability",
  description: "Portfolio of Rohit Vijay Darda — Data Analyst, Sustainability Finance student, and all-round guy who once managed 700 people (kind of).",
  keywords: ["Rohit Darda", "Data Analyst", "Sustainable Finance", "Power BI", "ESG", "Oslo"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise font-grotesk bg-dark text-white antialiased">
        {children}
      </body>
    </html>
  );
}
