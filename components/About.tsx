import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-bgDark border-t border-borderDark/30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image */}
          <div className="relative">
             <div className="absolute inset-0 bg-primary blur-[80px] opacity-10 rounded-full"></div>
             <img 
               src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
               alt="Forklift Operator" 
               className="relative z-10 w-full rounded-[24px] border border-borderDark shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
             />
             
             {/* Overlay Stat */}
             <div className="absolute -bottom-8 -right-4 md:right-8 z-20 bg-surfaceDark border border-borderDark p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[200px]">
                <div className="bg-bgDark p-3 rounded-full text-primary border border-borderDark">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-textMain">10+</p>
                  <p className="text-xs text-textSecondary uppercase tracking-wider">Tahun Pengalaman</p>
                </div>
             </div>
          </div>

          {/* Right: Text */}
          <div className="pl-0 lg:pl-10 relative border-l-4 border-primary/50">
            <div className="pl-8">
              <h2 className="font-display font-bold text-4xl md:text-[42px] leading-[1.2] text-textMain mb-6">
                Tentang Kami
              </h2>
              
              <div className="space-y-6 text-textSecondary text-[17px] leading-[1.6]">
                <p>
                 Mulya Diesel Pratama adalah penyedia <span className="text-primary font-medium"> Layanan Sewa Forklift</span> profesional untuk mendukung perusahaan anda disektor manufaktur, logistik hingga konstruksi.
                </p>
                <p>
                 Kami memastikan setiap unit selalu dalam kondisi prima melalui perawatan standar, pengiriman cepat, dan dukungan teknisi berpengalaman di lapangan serta mendukung operasional Anda berjalan<span className="text-textMain font-medium border-b border-primary/50"> Tanpa Hambatan dan Tanpa Downtime </span> yang mengganggu produktivitas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;