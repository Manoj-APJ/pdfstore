import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export function EmptyCart() {
  return (
    <div className="text-center py-12">
      <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
      <h2 className="mt-4 text-lg font-medium text-gray-900">Your cart is empty</h2>
      <p className="mt-2 text-gray-500">Browse our catalog to find amazing PDFs!</p>
      <Link
        to="/catalog"
        className="mt-6 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
      >
        View Catalog
      </Link>
    </div>
  );
}