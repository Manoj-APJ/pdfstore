import { PDF } from '../types';

interface CreateOrderResponse {
  id: string;
  amount: number;
  currency: string;
}

export async function createRazorpayOrder(pdf: PDF): Promise<CreateOrderResponse> {
  const response = await fetch(
    `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-razorpay-order`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ pdfId: pdf.id }),
    }
  );

  const data = await response.json();
  if (data.error) throw new Error(data.error);
  return data;
}

export function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}