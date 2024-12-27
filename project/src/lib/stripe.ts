import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
export const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);