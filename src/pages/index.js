import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturedCollection from "../components/FeaturedCollections/FeaturedCollection";
import ProductsList from "../components/ProductsList/ProductsList";

const Title = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: rgb(126, 27, 27);
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <HeroSection />
        <FeaturedCollection />
        <ProductsList />
      </main>
    </Layout>
  );
}
