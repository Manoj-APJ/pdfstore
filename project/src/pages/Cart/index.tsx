import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { EmptyCart } from './EmptyCart';

export default function Cart() {
  const cart = useStore((state) => state.cart);
  const navigate = useNavigate();

  const handleCheckout = () => {
    // TODO: Implement checkout logic
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.pdf.id} item={item} />
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-4 mt-8 lg:mt-0">
          <CartSummary items={cart} onCheckout={handleCheckout} />
        </div>
      </div>
    </div>
  );
}