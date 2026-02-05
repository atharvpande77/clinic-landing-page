
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, SERVICES, TESTIMONIALS } from './constants';
import { ServiceCard } from './components/ServiceCard';
import { TestimonialCard } from './components/TestimonialCard';
import { ContactForm } from './components/ContactForm';
import { DirectorsSection } from './components/DirectorsSection';

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div
      className="slider-container relative max-w-7xl mx-auto flex items-center justify-center py-10"
      style={{ '--active-index': activeIndex } as React.CSSProperties}
    >
      {/* Left Button */}
      <button
        onClick={prevTestimonial}
        className="absolute left-2 md:left-4 z-30 w-12 h-12 rounded-full bg-teal-600/90 text-white backdrop-blur-md border border-teal-500/50 flex items-center justify-center hover:bg-teal-500 hover:scale-110 transition-all shadow-lg"
        aria-label="Previous testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Slider Track Wrapper */}
      <div className="w-full overflow-hidden">
        <div className="slider-track">
          {TESTIMONIALS.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={testimonial.id}
                className={`slider-item ${isActive
                    ? 'scale-100 opacity-100 z-20 blur-0'
                    : 'scale-90 opacity-50 blur-[2px] pointer-events-none'
                  }`}
              >
                <div className={`transition-all duration-500 ${isActive ? 'shadow-2xl' : ''}`}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Button */}
      <button
        onClick={nextTestimonial}
        className="absolute right-2 md:right-4 z-30 w-12 h-12 rounded-full bg-teal-600/90 text-white backdrop-blur-md border border-teal-500/50 flex items-center justify-center hover:bg-teal-500 hover:scale-110 transition-all shadow-lg"
        aria-label="Next testimonial"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex ? 'bg-white w-8' : 'bg-white/30 w-2 hover:bg-white/60'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-teal-600' : 'text-teal-600'}`}>
              ATTREYA
            </span>
            <span className={`ml-2 text-sm font-semibold uppercase tracking-widest hidden sm:block ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
              Wellness & Healing
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-700 hover:text-teal-600' : 'text-white hover:text-teal-200'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-teal-600 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-200/50"
            >
              Book Now
            </a>
          </div>

          <button className="md:hidden text-teal-600">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/unwatermarked_Gemini_Generated_Image_14ccsv14ccsv14cc.png"
            alt="Ayurvedic Treatment Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-teal-500/30">
              Healing Rooted in Science & Tradition
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Reclaim Your <span className="text-teal-400">Wellness</span> Journey.
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Nagpur's premier multi-speciality clinic offering expert care in Dermatology, ENT, Pain Therapy, and authentic Ayurved & Panchakarma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="bg-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-700 transition-all text-center shadow-xl shadow-teal-900/20"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 hidden lg:block z-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 flex justify-between items-center border border-slate-100">
              <div className="text-center flex-1 border-r border-slate-100">
                <p className="text-4xl font-extrabold text-teal-600">15k+</p>
                <p className="text-slate-500 font-medium">Patients Treated</p>
              </div>
              <div className="text-center flex-1 border-r border-slate-100">
                <p className="text-4xl font-extrabold text-teal-600">8+</p>
                <p className="text-slate-500 font-medium">Specialities</p>
              </div>
              <div className="text-center flex-1 border-r border-slate-100">
                <p className="text-4xl font-extrabold text-teal-600">100%</p>
                <p className="text-slate-500 font-medium">Safe Procedures</p>
              </div>
              <div className="text-center flex-1">
                <p className="text-4xl font-extrabold text-teal-600">24/7</p>
                <p className="text-slate-500 font-medium">Care & Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:pt-48 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Specialized Medical Care</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide a unique blend of modern clinical expertise and ancient healing traditions to offer comprehensive healthcare for you and your family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000"
                  alt="Natural Healing Herbs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-500/10 rounded-full z-0"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-teal-600/10 rounded-full z-0"></div>

              <div className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-teal-100 max-w-[250px]">
                <p className="text-teal-600 font-bold text-3xl mb-1">20+ Years</p>
                <p className="text-slate-600 text-sm font-medium">Of Trusted Medical Excellence in Nagpur Region.</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-3">About Attreya</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Why We Are Different</h3>
              <div className="space-y-6">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Attreya Wellness & Healing Clinic was founded on the belief that true health is more than just the absence of disease—it's the harmony of body, mind, and spirit.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our team brings together some of the most respected specialists in Central India, providing cutting-edge treatments alongside time-tested natural therapies.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Certified Specialists',
                    'Advanced Diagnostic Lab',
                    'Personalized Care Plans',
                    'Natural Healing Focus',
                    'Modern Infrastructure',
                    'Patient-First Philosophy'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-slate-700 font-semibold">
                      <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <DirectorsSection />

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-teal-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-teal-200 font-bold uppercase tracking-widest text-sm mb-3">Patient Stories</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white">Trusted by Thousands</h3>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-3">Get in Touch</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-8">Visit Our Clinic</h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Our Address</h4>
                    <p className="text-slate-600">ICICI Bank, Harihar Building, and, Beltarodi Rd, near Shanti Park Apartment, Besa, Nagpur, Maharashtra 440015</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600">+91 98765 43210</p>
                    <p className="text-slate-600">+91 712 222 3333</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Working Hours</h4>
                    <p className="text-slate-600">Mon - Sat: 10:00 AM - 01:00 PM, 05:00 PM - 09:00 PM</p>
                    <p className="text-teal-600 font-semibold">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 bg-slate-50 rounded-3xl p-8 lg:p-12 shadow-inner border border-slate-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-2xl font-extrabold tracking-tight text-teal-500">ATTREYA</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Holistic health excellence for the Nagpur community. We combine global medical standards with personalized local care.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/attreyaclinic13?igsh=YzljYTk1ODg3Zg%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-teal-600 transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-4">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <a href={`#${service.id}`} className="text-slate-400 hover:text-teal-400 transition-colors">
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-slate-400 mb-6">Subscribe for monthly health tips and clinic updates.</p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-slate-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-teal-500"
                />
                <button className="bg-teal-600 px-4 py-2 rounded-r-lg font-bold hover:bg-teal-700 transition-colors">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Attreya Wellness & Healing Clinic. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-teal-400">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
