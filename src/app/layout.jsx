import "./globals.css";

export const metadata = {
  title: "Ayvalık Food Guide",
  description: "A modern Instagram-style food gallery app",
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {modal}
      </body>
    </html>
  );
}
