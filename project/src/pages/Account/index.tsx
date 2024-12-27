import React from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { User } from '../../types';
import { AccountDetails } from './AccountDetails';
import { OrderHistory } from './OrderHistory';

export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    async function getUser() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
        return;
      }
      setUser({
        id: user.id,
        email: user.email!,
        full_name: user.user_metadata.full_name
      });
    }

    getUser();
  }, [navigate]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>
      
      <div className="space-y-8">
        <AccountDetails user={user} />
        
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Order History</h2>
          <OrderHistory />
        </div>
      </div>
    </div>
  );
}