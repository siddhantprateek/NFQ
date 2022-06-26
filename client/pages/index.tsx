import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Colorpartion from "../components/colorpartition/colorpartion.components";
import pridefacepaint from '../public/pridefacepaint.png';
import prideflagcape from '../public/prideflagcape.png';
import couples1 from '../public/couples1.png';
import couples2 from '../public/couples2.png';
import Teamcard from "../components/teamcard/teamcard.components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFQ: No Fear Queer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headercontainer}>
          <h1>
            WE&#39;RE &nbsp;&nbsp; <span className={styles.yellowfont}>HERE.</span>
          </h1>
          <h1 className="outlineheader">
            WE&#39;RE &nbsp;&nbsp;&nbsp; <span>QUEER</span>.
          </h1>
          <div className={styles.prideshow}>
            <Image src="/prideflagshow.png" alt="" width={500} height={700} />
          </div>
        </div>
        <Colorpartion />

        <div className="get_connect_section">
          <div className="getc_image_content">
          <div className="getc_image_content">
            <div className="pride_face ">
              <Image src={pridefacepaint}  alt="" width={400}  height={600} />
            </div>
            <div className="pride_cape ">
              <Image src={prideflagcape}  alt=""  width={400}  height={600} />
            </div>
          </div>
          </div>
          <div className={styles.section_connect}>
            <h1>GET CONNECTED</h1>
            <p>
              Your search for a great relationship has never been easier with
              groundbreaking overhaul of the eharmony you know and trust.
            </p>
          </div>
        </div>
        <div className="get_connect_section">
          <div className={styles.section_connect}>
            <h1>GET <br/> CONNECTED</h1>
            <p>
              Your search for a great relationship has never been easier with
              groundbreaking overhaul of the eharmony you know and trust.
            </p>
          </div>
          <div className="getc_image_content">
            <div className="pride_face ">
              <Image src={couples1}  alt="" width={400}  height={600} />
            </div>
            <div className="pride_cape ">
              <Image src={couples2}  alt=""  width={400}  height={600} />
            </div>
          </div>
        </div>
        <div className="margin-top">
          <Colorpartion />
        </div>
        <div className="team_container">
          <h1>TEAM</h1>
          <Teamcard/>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
