import React from 'react';
import { Link } from 'react-router-dom';
import { PDF } from '../../types';
import { BuyNowButton } from '../../components/BuyNowButton';
import { AddToCartButton } from '../ProductDetails/AddToCartButton';

interface PDFCardProps {
  pdf: PDF;
}

export function PDFCard({ pdf }: PDFCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link to={`/product/${pdf.id}`}>
        <img
          src={pdf.cover_image}
          alt={pdf.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 hover:text-indigo-600">
            {pdf.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
            {pdf.description}
          </p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-indigo-600 font-medium">
              ${pdf.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">
              {pdf.category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0 space-y-2">
        <BuyNowButton pdf={pdf} />
        <AddToCartButton pdf={pdf} />
      </div>
    </div>
  );
}