import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import Button from '../components/Button/Button'

import styled from 'styled-components'

// StyleComponent
const Title = styled.p`
    font-size: 1.5em;
    text-align: center;
    color: rgb(126, 27, 27);
`;

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Home Page</title>
            </Head>

            <Layout>
                <main>
                    <Title>Home Page</Title>
                    <h1>Welcome To My Shop</h1>
                    <Link href="/about/about">About</Link>
                </main>
            </Layout>
            <Button type="primary">
Click Here            </Button>
        </div>
    )
}
