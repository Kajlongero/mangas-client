import { LargeCard } from "../Cards/HeroCards/LargeCard";
import { SmallCard } from "../Cards/HeroCards/SmallCard";
import s from "./styles.module.css";

export const Hero = () => {
  return (
    <section className={s.hero}>
      <LargeCard />
      <div className={`${s.hero__smallContainer} flex-1`}>
        <SmallCard />
        <SmallCard />
      </div>
    </section>
  );
};
