"use client";
import { usePathname } from "next/navigation";
import Header from "./Header/header";
import Footer from "./Footer/footer";
import styled from "styled-components";

const MainContainer = styled.main`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;

  @media (min-width: 1200px) {
    padding: 0;
  }

  @media (max-width: 1000px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const PageWrapper = styled.div`
  background: #f5f5f5;
  min-height: 100vh;
  width: 100%;
`;

const Layout = ({ children }) => {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");
  return (
    <PageWrapper>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </PageWrapper>
  );
};

export default Layout;
