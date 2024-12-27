import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <Book className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">PDF Store</span>
            </Link>
            <p className="mt-4 text-gray-500">
              Your trusted source for premium PDF resources.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/catalog" className="text-gray-500 hover:text-indigo-600">
                  Catalog
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-500 hover:text-indigo-600">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Policies
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/policies#privacy" className="text-gray-500 hover:text-indigo-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies#terms" className="text-gray-500 hover:text-indigo-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/policies#refund" className="text-gray-500 hover:text-indigo-600">
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link to="/policies#shipping" className="text-gray-500 hover:text-indigo-600">
                  Shipping & Delivery
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/policies#contact" className="text-gray-500 hover:text-indigo-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} PDF Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}