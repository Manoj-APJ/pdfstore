import React from 'react';

interface PolicySectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function PolicySection({ id, title, children }: PolicySectionProps) {
  return (
    <section id={id} className="scroll-mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="prose max-w-none text-gray-600">{children}</div>
    </section>
  );
}