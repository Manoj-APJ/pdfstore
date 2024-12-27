import React from 'react';
import { User } from '../../types';

interface AccountDetailsProps {
  user: User | null;
}

export function AccountDetails({ user }: AccountDetailsProps) {
  if (!user) return null;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Details</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <p className="mt-1 text-gray-900">{user.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <p className="mt-1 text-gray-900">{user.full_name || 'Not provided'}</p>
        </div>
      </div>
    </div>
  );
}