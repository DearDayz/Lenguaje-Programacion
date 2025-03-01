
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import SearchSection from '@/components/SearchSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromotionBanner from '@/components/PromotionBanner';

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <HeroBanner />
      <SearchSection />
      <FeaturedProducts />
      <PromotionBanner />
    </main>
  );
};

export default Index;
