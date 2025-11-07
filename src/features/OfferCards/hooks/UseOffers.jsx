// src/hooks/useOffers.js
import { useState, useEffect } from 'react';
import { HeroSliderApi } from '../api/OfferCardsApi';

export const useOffers = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        setLoading(true);
        setError(null);

        const result = await HeroSliderApi.getOffersData();
        const offerCards = result?.data?.offerCards || [];

        const images = offerCards
          .map((item, i) => ({
            id: item.code || `img-${i}`,
            image: (item.picture || item.image_url)?.replace(/\\/g, ''),
            link: item.link || '/specialoffer'
          }))
          .filter(item => item.image); // Only real images

        setOffers(images);
      } catch (err) {
        console.error('Failed to load offer images:', err);
        setError('Failed to load images');
        setOffers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return { offers, loading, error };
};