
import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group">
      <div className="flex text-amber-400 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-white/20'}`} 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-white text-lg italic leading-relaxed mb-8 font-light">
        "{testimonial.content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center font-bold text-white border border-teal-400/30">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h5 className="text-white font-bold">{testimonial.name}</h5>
          <p className="text-teal-200 text-xs font-semibold uppercase tracking-wider">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};
