import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { PDF } from '../../types';
import { useStore } from '../../store/useStore';

interface AddToCartButtonProps {
  pdf: PDF;
}

export function AddToCartButton({ pdf }: AddToCartButtonProps) {
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({ pdf, quantity: 1 });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
    >
      <ShoppingCart className="h-5 w-5 mr-2" />
      Add to Cart
    </button>
  );
}