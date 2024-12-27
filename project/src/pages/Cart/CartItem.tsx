import React from 'react';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useStore } from '../../store/useStore';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const removeFromCart = useStore((state) => state.removeFromCart);

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <img
        src={item.pdf.cover_image}
        alt={item.pdf.title}
        className="w-20 h-20 object-cover rounded"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{item.pdf.title}</h3>
        <p className="text-sm text-gray-500">{item.pdf.category}</p>
      </div>
      <div className="text-right">
        <p className="font-medium text-gray-900">
          ${(item.pdf.price * item.quantity).toFixed(2)}
        </p>
        <button
          onClick={() => removeFromCart(item.pdf.id)}
          className="text-red-600 hover:text-red-800"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}