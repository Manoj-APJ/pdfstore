import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { PDF } from '../../types';
import { AddToCartButton } from './AddToCartButton';
import { BuyNowButton } from '../../components/BuyNowButton';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [pdf, setPdf] = useState<PDF | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPDF() {
      if (!id) return;

      const { data, error } = await supabase
        .from('pdfs')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching PDF:', error);
        return;
      }

      setPdf(data as PDF);
      setLoading(false);
    }

    fetchPDF();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!pdf) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-gray-500">PDF not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div>
          <img
            src={pdf.cover_image}
            alt={pdf.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-10 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{pdf.title}</h1>
          <div className="mt-3">
            <span className="text-2xl font-bold text-indigo-600">
              ${pdf.price.toFixed(2)}
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900">Description</h2>
            <p className="mt-2 text-gray-500">{pdf.description}</p>
          </div>
          <div className="mt-8 space-y-4">
            <BuyNowButton pdf={pdf} />
            <AddToCartButton pdf={pdf} />
          </div>
        </div>
      </div>
    </div>
  );
}