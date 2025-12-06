import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-24 overflow-hidden bg-bgDark">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mesh opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bgDark via-bgDark/95 to-bgDark/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=2070&auto=format&fit=crop" 
          alt="Industrial Warehouse" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="relative pl-6 lg:pl-8 border-l-4 border-primary">
          <div className="space-y-8">

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-textMain tracking-tight">
              Sewa Forklift <span className="text-primary">Cepat & Terpercaya</span>
            </h1>

            <div className="flex flex-wrap gap-3">
              {['Ready 24 Jam', 'Unit Terawat', 'Respon Cepat'].map((badge) => (
                <span 
                  key={badge} 
                  className="px-4 py-1.5 rounded-full border border-borderDark bg-surfaceDark text-xs font-semibold text-textSecondary uppercase tracking-wider flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-textSecondary text-lg md:text-[17px] leading-[1.6] max-w-xl">
              Memberikan Solusi Yang Tepat Secara Total dan Berintegrasi Untuk Kebutuhan Operasional Anda
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-primary hover:bg-yellow-300 text-bgDark px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(242,242,13,0.3)]">
                Dapatkan Penawaran
                <ArrowRight size={20} strokeWidth={2.5} />
              </button>
              <button className="border border-borderDark text-textMain hover:bg-surfaceDark px-8 py-4 rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <Phone size={20} />
               Hubungi Kami
              </button>
            </div>
          </div>
        </div>

        {/* Visual Content */}
        <div className="relative hidden lg:block group">
           {/* Decorative elements behind image */}
           <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
           
           <div className="relative rounded-2xl border border-borderDark bg-surfaceDark/50 backdrop-blur-sm p-4 shadow-2xl">
             <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1595246140625-573b715e11d3?q=80&w=1200&auto=format&fit=crop" 
                  alt="Industrial Forklift" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Card Detail */}
                <div className="absolute bottom-6 left-6 right-6 bg-bgDark/90 backdrop-blur-md p-4 rounded-xl border border-borderDark flex items-center justify-between">
                  <div>
                    <p className="text-textSecondary text-xs uppercase tracking-widest mb-1">Unit Available</p>
                    <p className="text-textMain font-display font-bold">Toyota & Mitsubishi 3-5 Ton</p>
                  </div>
                  <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-bgDark">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;