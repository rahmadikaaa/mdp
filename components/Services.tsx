import React from 'react';
import { Clock, Calendar, Truck, Warehouse, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Clock size={40} strokeWidth={1} />,
      title: "Sewa Harian",
      description: "Ideal untuk kebutuhan cepat dan fleksibel, bongkar muat lebih cepat, atau pengganti unit rusak.",
    },
    {
      icon: <Calendar size={40} strokeWidth={1} />,
      title: "Sewa Mingguan",
      description: "Efisien untuk pekerjaan jangka pendek, proyek konstruksi musiman, atau pameran.",
    },
    {
      icon: <Warehouse size={40} strokeWidth={1} />,
      title: "Sewa Bulanan",
      description: "Optimal untuk operasional jangka panjang dengan harga lebih hemat dan maintenance rutin.",
    },
    {
      icon: <Truck size={40} strokeWidth={1} />,
      title: "Mobilisasi & Teknisi",
      description: "Mobilisasi unit ke lokasi proyek Anda, dengan teknisi ahli yang siap memastikan operasional tetap lancar.",
    },
  ];

  return (
    <section id="services" className="py-32 bg-bgDark relative">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        <div className="mb-16 max-w-2xl">
          <h2 className="font-display font-bold text-4xl md:text-[42px] leading-[1.2] text-textMain mb-6">
            Layanan Penyewaan Forklift
          </h2>
          <p className="text-textSecondary text-[17px] leading-[1.6]">
            Kami menyediakan berbagai pilihan sewa forklift untuk mendukung proyek Anda, dari kebutuhan harian hingga kontrak bulanan dengan armada prima.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-surfaceDark border border-borderDark rounded-[20px] p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              
              <h3 className="font-display font-bold text-xl md:text-[24px] text-textMain mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-textSecondary text-sm leading-relaxed mb-8">
                {service.description}
              </p>

            
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;