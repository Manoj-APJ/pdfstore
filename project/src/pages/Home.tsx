import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Shield, CreditCard } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Premium PDF Resources
          <span className="text-indigo-600"> for Everyone</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Access a vast library of high-quality PDFs. From educational materials to professional resources,
          find exactly what you need.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Link
            to="/catalog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Browse Catalog
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="mt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Vast Selection</h3>
                <p className="mt-5 text-base text-gray-500">
                  Thousands of carefully curated PDFs across multiple categories and subjects.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Secure Access</h3>
                <p className="mt-5 text-base text-gray-500">
                  Your purchases are protected and available instantly after payment.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Easy Payments</h3>
                <p className="mt-5 text-base text-gray-500">
                  Simple and secure payment process with multiple payment options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}