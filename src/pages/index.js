import Head from "next/head";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import HeroSection from "../components/HeroSection/HeroSection";
import FeaturedCollection from "../components/FeaturedCollections/FeaturedCollection";
import ProductsList from "../components/ProductsList/ProductsList";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <HeroSection />
      <FeaturedCollection />
      <ProductsList />
    </Layout>
  );
}
