"use client";

import { usePathname } from "next/navigation";
import Header from "./Header/header";
import Footer from "./Footer/footer";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
