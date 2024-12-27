import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

interface Order {
  id: string;
  created_at: string;
  total_amount: number;
  status: 'pending' | 'completed' | 'cancelled';
}

export function OrderHistory() {
  const navigate = useNavigate();
  const [orders, setOrders] = React.useState<Order[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // TODO: Fetch orders from Supabase
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-100 rounded-lg" />
        ))}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12 bg-white shadow rounded-lg">
        <FileText className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No orders yet</h3>
        <p className="mt-1 text-sm text-gray-500">Get started by browsing our catalog.</p>
        <div className="mt-6">
          <button
            onClick={() => navigate('/catalog')}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Browse Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
      {orders.map((order) => (
        <div key={order.id} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Order #{order.id.slice(0, 8)}
              </p>
              <p className="text-sm text-gray-500">
                {new Date(order.created_at).toLocaleDateString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">
                ${order.total_amount.toFixed(2)}
              </p>
              <p className={`text-sm capitalize ${
                order.status === 'completed' ? 'text-green-600' :
                order.status === 'cancelled' ? 'text-red-600' :
                'text-yellow-600'
              }`}>
                {order.status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}