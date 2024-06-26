
import Navbar from "./components/navbar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
      <body ><Navbar/>{children}</body>
    </html>
  );
}
