import Section from "document/components/section";
import styles from "./page.module.css";
import SecondSection from "document/components/second_session";
import About from "document/components/about";
import Services from "document/components/services";
import Footer from "document/components/footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Section />
      <SecondSection />
      <About />
      <Services />
      <Footer />
    </div>
  );
}
