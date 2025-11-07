// src/components/OfferImageCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OfferImageCard = ({ image, link }) => {
  return (
    <Link to={link} className="block">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Offer"
          className="w-full h-auto object-cover block"
          loading="lazy"
        />
      </div>
    </Link>
  );
};

export default OfferImageCard;