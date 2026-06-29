import "./globals.css";

export const metadata = {
  title: "Vercel Dashboard Fill Demo",
  description: "Demo app used to generate real activity inside Vercel dashboard."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
