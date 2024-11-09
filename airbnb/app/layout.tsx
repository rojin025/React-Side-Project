import Logo from "./_components/Logo";
import Navigation from "./_components/Navigatoin";

export const metadata = {
  title: "AirBnb",
  description: "Where home are rented",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>

        <footer>Copyright by the AirBnB</footer>
      </body>
    </html>
  );
}
