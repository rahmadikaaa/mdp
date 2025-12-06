import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Manager Gudang Logistik",
      content: "Unit sangat terawat dan bersih. Operator yang dikirim juga sangat profesional dan memiliki SIO aktif. Sangat merekomendasikan Mulya Diesel Pratama.",
      avatar: "https://i.pravatar.cc/150?u=budi"
    },
    {
      name: "Sarah Wijaya",
      role: "Project Manager Konstruksi",
      content: "Respon admin sangat cepat. Ketika kami butuh unit mendadak jam 11 malam, mereka siap sedia. Pelayanan bintang lima.",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      name: "Hendro Kusuma",
      role: "Direktur Operasional",
      content: "Harga sangat kompetitif untuk sewa bulanan. Maintenance rutin membuat kami tidak pusing memikirkan kerusakan unit.",
      avatar: "https://i.pravatar.cc/150?u=hendro"
    }
  ];

  return (
    <section className="py-32 bg-bgDark">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display font-bold text-4xl text-textMain mb-3">Apa Kata Klien Kami</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          <div className="flex items-center gap-4 text-textSecondary">
            <div className="flex text-primary">
              {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#f2f20d" />)}
            </div>
            <span className="font-medium text-textMain">4.8/5</span>
            <span className="text-sm border-l border-borderDark pl-4">Berdasarkan 400+ Review</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-surfaceDark border border-borderDark rounded-[20px] p-8 flex flex-col justify-between hover:border-textSecondary/30 transition-colors"
            >
              <p className="text-textSecondary text-lg leading-relaxed italic mb-8">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border border-borderDark object-cover"
                />
                <div>
                  <h4 className="font-display font-bold text-textMain text-sm">{item.name}</h4>
                  <p className="text-textSecondary text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;