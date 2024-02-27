import Image from "next/image";
import Nav from "./components/Nav";
import styles from "@/styles/Home.module.css";
import Spline from "@splinetool/react-spline";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <section className={styles.hero}>
        <div>
          <h1 className={styles.heroTitle}>Welcome to OddBall</h1>
          <p className={styles.heroDescription}>Explore our amazing services and unbeatable pricing!</p>
        </div>
        <div className={styles.backboard}>
          <Spline scene="https://prod.spline.design/S7fiNwhGrUz76sT3/scene.splinecode" />
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={styles.pricingCard}>
          <div>
            <h2 className={styles.pricingTitle}>Starter Draft</h2>
            <p className={styles.pricingDescription}>✅ View game time</p>
            <p className={styles.pricingDescription}>✅ See Teams</p>
            <p className={styles.pricingDescription}>✅ See Team/Player Stats</p>
          </div>
          <div>
            <p className={styles.pricingPrice}>$0/month</p>
            <button className={styles.buyNowButton}>Buy Now</button>
          </div>
        </div>

        <div className={styles.pricingCard}>
          <div>
            <h2 className={styles.pricingTitle}>All Star (Popular)</h2>
            <p className={styles.pricingDescription}>✅ View game time</p>
            <p className={styles.pricingDescription}>✅ See Teams</p>
            <p className={styles.pricingDescription}>✅ See Team/Player Stats</p>
            <p className={styles.pricingDescription}>✅ See Betting Odds</p>
          </div>
          <div>
            <p className={styles.pricingPrice}>7.99/month</p>
            <button className={styles.buyNowButton}>Buy Now</button>
          </div>
        </div>

        <div className={styles.pricingCard}>
          <div>
            <h2 className={styles.pricingTitle}>MVP</h2>
            <p className={styles.pricingDescription}>✅ View game time</p>
            <p className={styles.pricingDescription}>✅ See Teams</p>
            <p className={styles.pricingDescription}>✅ See Team/Player Stats</p>
            <p className={styles.pricingDescription}>✅ See Betting Odds</p>
            <p className={styles.pricingDescription}>✅ Game Highlights</p>
          </div>
          <div>
            <p className={styles.pricingPrice}>$15/month</p>
            <button className={styles.buyNowButton}>Buy Now</button>
          </div>
        </div>
      </section>

      <section className={styles.subBanner}>
        <div className={styles.subBannerText}>
          <h2>More About OddBall</h2>
          <p>OddBall guarantees highest quality of content related to NBA, whether it is
            stats or game highlights. We also provide betting odds for the games. Everything is
            live and up to date. We have a team of experts who are constantly updating the content
            to provide the best experience for our users. We also have a dedicated customer service.
          </p>
        </div>
        <div className={styles.subBannerImage}>
          <Image src="/images/OddBall.png" alt="Football" width={150} height={50} />
        </div>
      </section>

      <Footer />
    </main>
  );
}



