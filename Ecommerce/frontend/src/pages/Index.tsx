
import React, { useState, useEffect } from 'react';
import HeroBanner from '@/components/HeroBanner';
import SearchSection from '@/components/SearchSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import PromotionBanner from '@/components/PromotionBanner';

const Index = () => {
  const [showOffers, setShowOffers] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  // Check for URL hash to determine view
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#ofertas') {
      setShowOffers(true);
      
      // Wait for the component to render, then scroll to the offers section
      setTimeout(() => {
        const offersSection = document.getElementById('ofertas');
        if (offersSection) {
          offersSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <HeroBanner />
      <SearchSection />
      <FeaturedProducts 
        showOffers={showOffers} 
        selectedCategory={selectedCategory} 
      />
      <PromotionBanner />
    </main>
  );
};

export default Index;
