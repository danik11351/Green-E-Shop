import { Footer } from "../Components/Footer";
import { AboveNavBarLargeScreen } from "../Components/AboveNavBar";
import { AboveNavBarMobile } from "../Components/AboveNavBar";
import { Blog } from "../Components/Blog";
import { CatagoriesMobileScreen } from "../Components/CatagoriesMobileScreen";
import { Counter, SalesCounter } from "../Components/Counter";
import Popup from "../Components/EmailPopUp";
import {
  FeaturedProducts,
  FeaturedProductsExtension,
} from "../Components/FeaturedProducts";
import { HeroSection, HeroSectionUnderCards } from "../Components/HeroSection";
import { LargeScreenNavBar } from "../Components/NavBar";
import { ShopByCatagories } from "../Components/ShopByCatagories";
import { Testimonials, WorkingWithUs } from "../Components/Testimonials";
import { TrustedSource } from "../Components/TrustedSource";

function HomePage() {
  return (
    <div>
      <AboveNavBarLargeScreen />
      <Popup />
      <AboveNavBarMobile />
      <LargeScreenNavBar />
      <HeroSection />
      <HeroSectionUnderCards />
      <FeaturedProducts />
      <FeaturedProductsExtension />
      <ShopByCatagories />
      <CatagoriesMobileScreen />
      <TrustedSource />
      <Counter />
      <SalesCounter />
      <Blog />
      <Testimonials />
      <WorkingWithUs />
      <Footer />
    </div>
  );
}
export { HomePage };
