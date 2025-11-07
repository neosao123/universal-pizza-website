// src/components/OfferCards.jsx
import React from 'react';
import { useOffers } from '../hooks/UseOffers';
import OfferImageCard from './OfferImageCard';

const OfferCards = () => {
  const { offers, loading } = useOffers();

  if (loading) {
    return (
      <section className="py-12 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-gray-200 rounded-2xl h-74 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (offers.length === 0) return null;

  return (
    <section className="py-0 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {offers.map(offer => (
            <OfferImageCard
              key={offer.id}
              image={offer.image}
              link={offer.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferCards;