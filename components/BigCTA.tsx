import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BigCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-bgDark">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-primary rounded-[24px] p-10 md:p-20 relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(242,242,13,0.15)] group">
          
          {/* Abstract pattern background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-black via-transparent to-transparent"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-4xl md:text-5xl text-bgDark mb-6 leading-tight">
                Siap Mendukung Operasional Anda?
              </h2>
              <p className="text-bgDark/80 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Hubungi kami untuk konsultasi dan penawaran cepat. Tim kami siap membantu Anda menemukan solusi forklift terbaik untuk efisiensi bisnis Anda.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button className="bg-bgDark text-white hover:bg-black px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform group-hover:-translate-y-1 flex items-center gap-3 shadow-xl">
                Get A Quote Now
                <ArrowUpRight className="text-primary" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BigCTA;