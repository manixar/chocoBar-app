import Link from 'next/link';
import Layout from '../../components/Layout/Layout';
import Head from "next/head";
import styles from './About.module.scss';

export default function About() {
    return (
        <div className={styles.about}>
            <Head>
                <title>About Page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
            This is about page.
            <Link href="/">Home</Link>
            </Layout>
        </div>
    )
}
