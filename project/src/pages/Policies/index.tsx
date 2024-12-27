import React from 'react';
import { PolicySection } from './PolicySection';

export default function Policies() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Policies</h1>
      
      <div className="space-y-12">
        <PolicySection id="privacy" title="Privacy Policy">
          <p>
            We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our services.
          </p>
          <p>
            We collect information that you provide directly to us, including your name, email address, and payment information when you make a purchase. We use this information solely for processing your orders and providing you with our services.
          </p>
        </PolicySection>

        <PolicySection id="terms" title="Terms and Conditions">
          <p>
            By accessing and using our website, you agree to be bound by these terms and conditions. Our digital products are protected by copyright and intellectual property laws.
          </p>
          <p>
            You may not redistribute, resell, or modify our PDF products without explicit written permission. Each purchase grants you a personal, non-exclusive license to access and use the content.
          </p>
        </PolicySection>

        <PolicySection id="refund" title="Cancellation and Refund">
          <p>
            Due to the digital nature of our products, we generally do not offer refunds once the PDF has been downloaded. However, we may consider refunds in specific circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Technical issues preventing access to the PDF</li>
            <li>Incorrect product delivery</li>
            <li>Major discrepancy between product description and actual content</li>
          </ul>
        </PolicySection>

        <PolicySection id="shipping" title="Shipping and Delivery">
          <p>
            As we deal exclusively with digital products, delivery is instant upon successful payment. You will receive:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Immediate access to your purchased PDF</li>
            <li>Download link via email</li>
            <li>Access in your account dashboard</li>
          </ul>
        </PolicySection>

        <PolicySection id="contact" title="Contact Us">
          <p>
            We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out:
          </p>
          <ul className="list-none space-y-2">
            <li><strong>Email:</strong> support@pdfstore.com</li>
            <li><strong>Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM EST</li>
            <li><strong>Response Time:</strong> Within 24 business hours</li>
          </ul>
        </PolicySection>
      </div>
    </div>
  );
}