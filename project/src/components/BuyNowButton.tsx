import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';
import { PDF } from '../types';
import { supabase } from '../lib/supabase';
import { createRazorpayOrder, loadRazorpay } from '../lib/razorpay';

interface BuyNowButtonProps {
  pdf: PDF;
}

export function BuyNowButton({ pdf }: BuyNowButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleBuyNow = async () => {
    try {
      setLoading(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/login';
        return;
      }

      // Load Razorpay SDK
      const isLoaded = await loadRazorpay();
      if (!isLoaded) {
        throw new Error('Razorpay SDK failed to load');
      }

      // Create order
      const order = await createRazorpayOrder(pdf);

      // Initialize payment
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'PDF Store',
        description: `Purchase ${pdf.title}`,
        order_id: order.id,
        handler: function (response: any) {
          // Handle successful payment
          console.log('Payment successful:', response);
          // TODO: Verify payment with backend
        },
        prefill: {
          email: user.email,
        },
        theme: {
          color: '#4F46E5',
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Buy now error:', error);
      alert('Failed to process purchase. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleBuyNow}
      disabled={loading}
      className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 disabled:bg-green-400"
    >
      <CreditCard className="h-5 w-5 mr-2" />
      {loading ? 'Processing...' : 'Buy Now'}
    </button>
  );
}