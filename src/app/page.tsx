import Section from "document/components/section";
import styles from "./page.module.css";
import SecondSection from "document/components/second_session";

export default function Home() {
  return (
    <div className={styles.page}>
      <Section />
      <SecondSection />
    </div>
  );
}
