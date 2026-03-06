import React from 'react';
import { useTestimonials } from '../context/TestimonialContext';

const Testimonials = () => {
    const { testimonials } = useTestimonials();

    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900">Apa Kata Mereka?</h2>
                    <p className="text-slate-500 mt-2">Pandangan tokoh dan wali santri tentang Villa Quran Baron.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition duration-300">
                            <i className="fa-solid fa-quote-right text-4xl text-slate-100 absolute top-4 right-4"></i>
                            
                            <div className="flex items-center gap-4 mb-6">
                                <img 
                                    src={item.image || "https://ui-avatars.com/api/?name=" + item.name} 
                                    alt={item.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                                    <p className="text-xs text-slate-500">{item.role}</p>
                                </div>
                            </div>

                            <p className="text-slate-600 text-sm italic leading-relaxed">"{item.content}"</p>

                            <div className="flex text-yellow-400 text-xs mt-4">
                                {[...Array(item.rating || 5)].map((_, i) => (
                                    <i key={i} className="fa-solid fa-star"></i>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;