import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";

const HeroContainer = styled(Box)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  min-height: 100vh;
  overflow: hidden;
  px: 6;
  //BACKGROUND
  background-image: url(/img/hero-section/main-pic.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  //@media (min-width: 800px) {
  //  background-attachment: scroll;
  //  justify-content: space-between;
  //}
  //@media (max-width: 800px) {
  //  background-attachment: scroll;
  //  background-size: cover;
  //  min-height: 100vh;
  //}
  //ON BACKGROUND OVERLAY
  "&:before": {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(216, 185, 185, 0.09);
  }
`;

const ContentWrapper = styled(Box)`
  position: relative;
  z-index: 1;
  padding: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    align-items: flex-start;
    text-align: right;
    padding-right: 10%;
  }
`;

const StyledTypography = styled(Typography)`
  && {
    font-family: "Yekan", Tahoma, sans-serif;
    font-weight: bold;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.5rem !important;
      line-height: 1.4;
      text-align: center;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      font-size: 3.5rem !important;
      text-align: center;
    }

    @media (min-width: 1025px) {
      font-size: 5rem !important;
      line-height: 1.2;
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #ece6e4;
    color: #4b2c20;
    border-radius: 25px;
    font-family: "Yekan", Tahoma, sans-serif;
    font-size: 19px;
    font-weight: 600;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      width: 80%;
      max-width: 200px;
      padding: 10px 20px;
      margin-top: 10px;
      font-size: 16px;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      width: 180px;
      padding: 10px 30px;
    }

    @media (min-width: 1025px) {
      width: 180px;
      padding: 8px 32px;
    }

    &:hover {
      background-color: #f5e1c8;
      transform: scale(1.05);
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <ContentWrapper>
        <StyledTypography
          component={motion.h3}
          variant="h1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          تازه ترین هارو از ما بخواهید
        </StyledTypography>
        <StyledButton
          variant="contained"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          component={motion.button}
        >
          سفارش
        </StyledButton>
      </ContentWrapper>
    </HeroContainer>
  );
}
