import Head from 'next/head';
import {Header} from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <title>AirBnB</title>
      </Head>
      <Header />
    </div>
  );
}
