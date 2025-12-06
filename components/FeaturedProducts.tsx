import React from 'react';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Forklift 3 Ton",
      category: "DIESEL",
      specs: ["3 Meter", "4 Meter"],
      // Menggunakan gambar valid pengganti link sementara
      image: "https://images.unsplash.com/photo-1616423662038-a468b3765103?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Forklift 5 Ton",
      category: "DIESEL",
      specs: ["3 Meter", "4.5 Meter", "6 Meter"],
      image: "https://images.unsplash.com/photo-1595246140625-573b715e11d3?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Forklift 7 Ton",
      category: "DIESEL",
      specs: ["3 Meter", "5 Meter"],
      image: "https://plus.unsplash.com/premium_photo-1664303847960-586318f59035?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: 4,
        name: "Forklift 10 Ton",
        category: "DIESEL",
        specs: ["3 Meter"],
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
      }
  ];

  return (
    <section className="py-32 bg-bgDark border-t border-borderDark/50 relative">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-surfaceDark/30 -z-10 blur-3xl rounded-l-full opacity-20"></div>

       <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
             
             {/* Left Column - Sticky Content */}
             <div className="lg:col-span-5 flex flex-col justify-center items-start lg:sticky lg:top-32 h-fit">
                <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-textMain mb-6 leading-tight">
                  Unit <br/>
                  <span className="text-primary">Unggulan</span>
                </h2>
                <p className="text-textSecondary text-lg mb-10 leading-relaxed max-w-md">
                  Temukan pilihan forklift berkualitas kami yang siap mendukung operasional bisnis Anda dengan performa tinggi dan daya tahan teruji.
                </p>
                
                <button className="group bg-primary text-bgDark font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-yellow-300 transition-all shadow-[0_0_20px_-5px_rgba(242,242,13,0.3)]">
                  Lihat Semua Unit
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </button>
             </div>

             {/* Right Column - Product List */}
             <div className="lg:col-span-7 flex flex-col gap-6">
                {products.map((product) => (
                  <div key={product.id} className="group relative bg-surfaceDark/50 backdrop-blur-sm border border-borderDark rounded-[24px] p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
                      
                      {/* Image Area */}
                      <div className="w-full sm:w-40 h-40 shrink-0 rounded-2xl overflow-hidden bg-bgDark border border-borderDark relative">
                         <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                         />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 w-full text-center sm:text-left">
                         <span className="inline-block text-primary/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 border border-primary/20 px-2 py-1 rounded">
                            {product.category}
                         </span>
                         <h3 className="font-display font-bold text-2xl text-textMain mb-3">
                            {product.name}
                         </h3>
                         <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                            <span className="text-textSecondary text-xs py-1">Mast:</span>
                            {product.specs.map((spec, idx) => (
                              <span key={idx} className="px-2 py-1 bg-bgDark border border-borderDark rounded text-[11px] text-textMain font-medium">
                                {spec}
                              </span>
                            ))}
                         </div>
                      </div>

                      {/* Action Button */}
                      <div className="shrink-0">
                         <button className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-bgDark group-hover:bg-white transition-colors shadow-lg">
                            <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                         </button>
                      </div>

                  </div>
                ))}
             </div>

          </div>
       </div>
    </section>
  )
}

export default FeaturedProducts;