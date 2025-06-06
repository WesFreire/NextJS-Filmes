import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <header className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
          <Link
            href="/"
            className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors"
          >
            WESFLIX
          </Link>
          <Link
            href="/Favorites"
            className="text-lg hover:text-gray-300 transition-colors"
          >
            Meus Filmes
          </Link>
        </header>

        {children}
      </body>
    </html>
  );
}
