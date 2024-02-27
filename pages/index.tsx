import Image from "next/image";
import Nav from "./components/Nav";
import styles from "@/styles/index.module.css";
import Spline from "@splinetool/react-spline";

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
            <h2 className={styles.pricingTitle}>All Star (opular)</h2>
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
          <h2>Sub Banner Title</h2>
          <p>This is the sub banner description text. You can add any information here.</p>
        </div>
        <div className={styles.subBannerImage}>
          <Image src="/images/OddBall.png" alt="Football" width={150} height={50} />
        </div>
      </section>
      
    </main>
  );
}



