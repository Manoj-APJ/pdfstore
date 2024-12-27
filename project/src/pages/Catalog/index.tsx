import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { PDF } from '../../types';
import { CatalogFilters } from './CatalogFilters';
import { PDFCard } from './PDFCard';

export default function Catalog() {
  const [pdfs, setPdfs] = useState<PDF[]>([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPDFs() {
      setLoading(true);
      let query = supabase.from('pdfs').select('*');

      if (category) {
        query = query.eq('category', category);
      }
      if (search) {
        query = query.ilike('title', `%${search}%`);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching PDFs:', error);
        return;
      }

      setPdfs(data as PDF[]);
      setLoading(false);
    }

    fetchPDFs();
  }, [search, category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">PDF Catalog</h1>
      
      <CatalogFilters
        search={search}
        category={category}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pdfs.map((pdf) => (
            <PDFCard key={pdf.id} pdf={pdf} />
          ))}
        </div>
      )}
    </div>
  );
}