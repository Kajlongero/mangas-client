import { LargeCard } from "@/components/Cards/HeroCards/LargeCard";
import s from "./styles.module.css";

export const CardContainer = () => {
  return (
    <section className={s.hero}>
      <LargeCard />
    </section>
  );
};
