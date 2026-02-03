import HeroSection from '@/components/sections/HeroSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import PriceCalculatorSection from '@/components/sections/PriceCalculatorSection';
import CoursesSection from '@/components/sections/CoursesSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <PortfolioSection />
      <PriceCalculatorSection />
      <CoursesSection />
    </div>
  );
}
