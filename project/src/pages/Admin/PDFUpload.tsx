import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export function PDFUpload() {
  const [uploading, setUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    pdfFile: null as File | null,
    coverImage: null as File | null
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'pdf' | 'cover') => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        [type === 'pdf' ? 'pdfFile' : 'coverImage']: file
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.pdfFile || !formData.coverImage) return;

    try {
      setUploading(true);

      // Upload PDF file
      const pdfPath = `pdfs/${Date.now()}-${formData.pdfFile.name}`;
      const { error: pdfError } = await supabase.storage
        .from('pdf-files')
        .upload(pdfPath, formData.pdfFile);
      if (pdfError) throw pdfError;

      // Upload cover image
      const coverPath = `covers/${Date.now()}-${formData.coverImage.name}`;
      const { error: coverError } = await supabase.storage
        .from('pdf-files')
        .upload(coverPath, formData.coverImage);
      if (coverError) throw coverError;

      // Get public URLs
      const pdfUrl = supabase.storage.from('pdf-files').getPublicUrl(pdfPath).data.publicUrl;
      const coverUrl = supabase.storage.from('pdf-files').getPublicUrl(coverPath).data.publicUrl;

      // Create PDF record in database
      const { error: dbError } = await supabase.from('pdfs').insert({
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        category: formData.category,
        file_url: pdfUrl,
        cover_image: coverUrl
      });

      if (dbError) throw dbError;

      // Reset form
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        pdfFile: null,
        coverImage: null
      });

      alert('PDF uploaded successfully!');
    } catch (error) {
      console.error('Error uploading PDF:', error);
      alert('Error uploading PDF. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          required
          value={formData.description}
          onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Price ($)</label>
        <input
          type="number"
          required
          min="0"
          step="0.01"
          value={formData.price}
          onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          required
          value={formData.category}
          onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Select a category</option>
          <option value="Education">Education</option>
          <option value="Business">Business</option>
          <option value="Technology">Technology</option>
          <option value="Design">Design</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">PDF File</label>
        <input
          type="file"
          required
          accept=".pdf"
          onChange={e => handleFileChange(e, 'pdf')}
          className="mt-1 block w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Cover Image</label>
        <input
          type="file"
          required
          accept="image/*"
          onChange={e => handleFileChange(e, 'cover')}
          className="mt-1 block w-full"
        />
      </div>

      <button
        type="submit"
        disabled={uploading}
        className="flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400"
      >
        <Upload className="w-5 h-5 mr-2" />
        {uploading ? 'Uploading...' : 'Upload PDF'}
      </button>
    </form>
  );
}