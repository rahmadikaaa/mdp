import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  specs: string[];
  image: string;
  description: string;
}

const FeaturedProducts: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Forklift 3 Ton",
      category: "DIESEL",
      specs: ["3 Meter", "4 Meter"],
      image: "/images/forklift3ton.png",
      description: "Forklift diesel 3 ton dengan kapasitas angkut optimal untuk berbagai kebutuhan industri. Dilengkapi dengan mesin bertenaga tinggi, sistem hidrolik presisi, dan fitur keamanan lengkap. Cocok untuk operasional gudang, pabrik, dan area logistik dengan beban kerja menengah."
    },
    {
      id: 2,
      name: "Forklift 5 Ton",
      category: "DIESEL",
      specs: ["3 Meter", "4.5 Meter", "6 Meter"],
      image: "/images/forklift5ton.png",
      description: "Forklift diesel 5 ton yang dirancang untuk tugas berat dengan performa maksimal. Memiliki daya angkat superior dan stabilitas tinggi untuk material handling skala besar. Ideal untuk industri manufaktur, pelabuhan, dan pusat distribusi dengan kebutuhan kapasitas tinggi."
    },
    {
      id: 3,
      name: "Forklift 7 Ton",
      category: "DIESEL",
      specs: ["3 Meter", "5 Meter"],
      image: "/images/forklift7ton.png",
      description: "Forklift diesel 7 ton dengan kekuatan ekstra untuk aplikasi heavy-duty. Mesin diesel turbo yang efisien dan transmisi otomatis memastikan produktivitas maksimal. Solusi sempurna untuk industri berat, konstruksi, dan operasional dengan beban material yang sangat besar."
    },
    {
      id: 4,
      name: "Forklift 10 Ton",
      category: "DIESEL",
      specs: ["3 Meter"],
      image: "/images/forklift10ton.png",
      description: "Forklift diesel 10 ton kelas premium untuk tugas super berat. Konstruksi kokoh dengan chassis reinforced dan sistem pendingin canggih untuk operasional non-stop. Pilihan utama untuk industri logam, pertambangan, dan proyek infrastruktur berskala besar."
    }
  ];

  const handleWhatsAppClick = (product: Product) => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan ${product.name}. Mohon informasi lebih lanjut.`);
    window.open(`https://wa.me/+6281234567890?text=${message}`, '_blank');
  };

  if (selectedProduct) {
    return (
      <section className="py-32 bg-bgDark border-t border-borderDark/50 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surfaceDark/30 -z-10 blur-3xl rounded-l-full opacity-20"></div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-8">
          <button
            onClick={() => setSelectedProduct(null)}
            className="group flex items-center gap-2 text-textSecondary hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Kembali ke Unit Unggulan</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="relative">
              <div className="w-full aspect-square rounded-[32px] overflow-hidden bg-surfaceDark/50 border border-borderDark">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <span className="inline-block w-fit text-primary/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 border border-primary/20 px-3 py-1.5 rounded">
                {selectedProduct.category}
              </span>

              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-textMain mb-6 leading-tight">
                {selectedProduct.name}
              </h1>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-textSecondary text-sm py-2">Mast:</span>
                {selectedProduct.specs.map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-surfaceDark/50 border border-borderDark rounded-lg text-sm text-textMain font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <p className="text-textSecondary text-lg mb-10 leading-relaxed">
                {selectedProduct.description}
              </p>

              <button
                onClick={() => handleWhatsAppClick(selectedProduct)}
                className="group bg-primary text-bgDark font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-yellow-300 transition-all shadow-[0_0_20px_-5px_rgba(242,242,13,0.3)] w-fit"
              >
                Hubungi via WhatsApp
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-bgDark border-t border-borderDark/50 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surfaceDark/30 -z-10 blur-3xl rounded-l-full opacity-20"></div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          <div className="lg:col-span-5 flex flex-col justify-center items-start lg:sticky lg:top-32 h-fit">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-textMain mb-6 leading-tight">
              Unit <br />
              <span className="text-primary">Unggulan</span>
            </h2>
            <p className="text-textSecondary text-lg mb-10 leading-relaxed max-w-md">
              Temukan pilihan forklift berkualitas kami yang siap mendukung operasional bisnis Anda dengan performa tinggi dan daya tahan teruji.
            </p>

            <button className="group bg-primary text-bgDark font-bold px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-yellow-300 transition-all shadow-[0_0_20px_-5px_rgba(242,242,13,0.3)]">
              Lihat Semua Unit
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative bg-surfaceDark/50 backdrop-blur-sm border border-borderDark rounded-[24px] p-6 flex flex-col sm:flex-row items-center gap-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="w-full sm:w-40 h-40 shrink-0 rounded-2xl overflow-hidden bg-bgDark border border-borderDark relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>

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

                <div className="shrink-0">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-bgDark group-hover:bg-white transition-colors shadow-lg"
                  >
                    <ChevronRight size={24} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
