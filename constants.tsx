
import React from 'react';
import { NavLink, Service, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'dermatology',
    title: 'Dermatology',
    description: 'Advanced clinical and cosmetic skin care solutions. From acne treatment to anti-aging procedures, our experts ensure your skin remains healthy and radiant.',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 'ent',
    title: 'ENT Specialist',
    description: 'Comprehensive diagnosis and treatment for Ear, Nose, and Throat disorders. We provide specialized care for sinus issues, hearing loss, and vocal health.',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    id: 'pain-therapy',
    title: 'Pain Therapy',
    description: 'Non-invasive and modern pain management techniques for chronic conditions, back pain, and musculoskeletal injuries to improve your quality of life.',
    imageUrl: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: 'ayurved',
    title: 'Ayurved & Panchakarma',
    description: 'Traditional healing meets modern lifestyle. Authentic Panchakarma treatments and Ayurvedic consultations for holistic detoxification and wellness.',
    imageUrl: 'https://images.unsplash.com/photo-1617191519105-d07b98b10de6?auto=format&fit=crop&q=80&w=800',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Local Business Owner',
    content: 'The Ayurvedic treatments at Attreya have completely transformed my health. The Panchakarma session was professional and very effective.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Deshmukh',
    role: 'Teacher',
    content: 'The skin treatments for my chronic acne were amazing. The doctors are very patient and explain every step of the process.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Kulkarni',
    role: 'IT Professional',
    content: 'Excellent care for my ENT issues. I had been suffering for months and they diagnosed the root cause within the first visit.',
    rating: 4
  },
  {
    id: 4,
    name: 'Sunita Mehra',
    role: 'Yoga Instructor',
    content: 'The pain therapy sessions for my back issues have been a godsend. I can finally return to my practice without discomfort.',
    rating: 5
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Retired Army Officer',
    content: "Impressed by the discipline and professionalism of the staff. Dr. Rao's background in the army shows in the precision of care.",
    rating: 5
  },
  {
    id: 6,
    name: 'Deepa Patil',
    role: 'Homemaker',
    content: 'A perfect blend of modern medicine and tradition. My daughter’s skin issues improved significantly with their holistic approach.',
    rating: 5
  },
  {
    id: 7,
    name: 'Anil Gupta',
    role: 'Merchant',
    content: 'The best clinic in Nagpur for personalized care. They truly listen to patients and provide tailored solutions.',
    rating: 5
  }
];
