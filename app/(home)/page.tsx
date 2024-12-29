import AboutRestaurant from "./components/AboutRestaurant";
import Hero from "./components/Hero";
import Restaurant from "./components/Restaurant";
import SpecialMenu from "./components/SpecialMenu";

export default function Home() {
  return (
    <div>
      <Hero />
      <SpecialMenu />
      <AboutRestaurant />
      <Restaurant />
    </div>
  );
}
