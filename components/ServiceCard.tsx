
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div 
      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={service.imageUrl} 
          alt={service.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-teal-600/10 group-hover:bg-teal-600/0 transition-colors duration-500"></div>
      </div>
      <div className="p-8">
        <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-500">
          {service.icon}
        </div>
        <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
          {service.title}
        </h4>
        <p className="text-slate-600 leading-relaxed text-sm mb-6">
          {service.description}
        </p>
        <a 
          href="#contact" 
          className="text-teal-600 font-bold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
