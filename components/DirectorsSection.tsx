import React from 'react';

const DIRECTORS = [
  {
    name: "Dr. PSV Rao",
    role: "MBBS, DNB(ENT), MRCS (ENT), FPM",
    image: "/Gemini_Generated_Image_wg6u5vwg6u5vwg6u.png",
    bio: "Ex-Indian Army. DHA & MOH registered ENT Specialist and Interventional Pain Physician with international certification from RCS, Ireland.",
    linkedin: "https://www.linkedin.com/in/dr-psv-rao-b7490a23"
  },
  {
    name: "Dr. Mayuri Dani",
    role: "BAMS (Ayurveda & Alternative Medicine)",
    image: "/Gemini_Generated_Image_h5qpvsh5qpvsh5qp.png",
    bio: "AYUSH certified expert in traditional Ayurveda and Alternative Medicine.",
    linkedin: "https://www.linkedin.com/in/dr-mayuri-dani-5a9970126"
  }
];

export const DirectorsSection: React.FC = () => {
  return (
    <section id="directors" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-[30%] -right-[10%] w-[30%] h-[50%] bg-teal-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-bold uppercase tracking-widest text-sm mb-3">Leadership</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Meet Our Directors</h3>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-lg">
            Guiding your wellness journey with expertise and compassion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {DIRECTORS.map((director, index) => (
            <div
              key={director.name}
              className="group bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col items-center text-center relative overflow-hidden hover:-translate-y-2"
            >
              <div className="w-48 h-48 mb-6 relative">
                <div className="absolute inset-0 bg-teal-100 rounded-full transform group-hover:scale-105 transition-transform duration-300"></div>
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white shadow-lg"
                />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-2">{director.name}</h4>
              <p className="text-teal-600 font-semibold mb-4 uppercase text-sm tracking-wider">{director.role}</p>
              <p className="text-slate-600 leading-relaxed max-w-sm mb-6">
                {director.bio}
              </p>

              <a
                href={director.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-[#0077b5] hover:text-white transition-all shadow-sm"
                aria-label={`${director.name}'s LinkedIn profile`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
