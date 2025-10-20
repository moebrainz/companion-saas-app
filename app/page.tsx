import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Something Light"
          topic="Brain Functionality"
          subject="science"
          duration={23}
          color="#ffda6e"
        />
        <CompanionCard
          id="355"
          name="Woods and Uses"
          topic="Wook Work Technology"
          subject="basic science"
          duration={43}
          color="#e5d0ff"
        />
        <CompanionCard
          id="533"
          name="Something Heavy"
          topic="Brain Malfunctionality"
          subject="science"
          duration={33}
          color="#BDE7FF"
        />
      </section>

      <section className="home-section">
        <CompanionList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
