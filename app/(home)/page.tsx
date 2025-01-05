import AboutRestaurant from "./components/AboutRestaurant";
import Hero from "./components/Hero";
import HistorySection from "./components/HistorySection";
import Restaurant from "./components/Restaurant";
import SpecialMenu from "./components/SpecialMenu";
import StationAnnouncement from "./components/StationAnnouncement";

export default function Home() {
  return (
    <div>
      <Hero />
      <StationAnnouncement />
      <HistorySection />
      <SpecialMenu />
      <AboutRestaurant />
      <Restaurant />
    </div>
  );
}
