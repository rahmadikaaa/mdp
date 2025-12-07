import React from "react";
import { ShieldCheck } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 bg-bgDark border-t border-borderDark/30"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Grid 1.2 : 1 → gambar lebih besar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">

          {/* ------------------------------- */}
          {/* LEFT IMAGE (refactored)        */}
          {/* ------------------------------- */}
          <div className="relative">

            {/* Soft glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[90px] opacity-20 rounded-[32px]"></div>

            {/* Image wrapper */}
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-borderDark aspect-[16/10]">

              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-borderDark aspect-[16/10]">
  <img 
    src="/images/tentang_kami2.png"
    className="w-full h-full object-cover"
  />
</div>

            </div>

            {/* Stats Card — dikecilkan & lebih presisi */}
            

          </div>

          {/* ------------------------------- */}
          {/* RIGHT TEXT (refactored)        */}
          {/* ------------------------------- */}
          <div className="relative pl-0 lg:pl-8 border-l-0 lg:border-l-4 border-primary/40">

            <h2 className="font-display font-bold text-4xl md:text-[44px] leading-[1.15] text-textMain mb-8">
              Tentang Kami
            </h2>

            <div className="space-y-6 text-textSecondary text-[17px] leading-[1.7]">
              <p>
                Mulya Diesel Pratama adalah penyedia
                <span className="text-primary font-semibold">
                  {" "}
                  Layanan Sewa Forklift
                </span>{" "}
                profesional untuk mendukung perusahaan Anda di sektor
                manufaktur, logistik, hingga konstruksi.
              </p>

              <p>
                Kami memastikan setiap unit selalu dalam kondisi prima melalui
                perawatan standar, pengiriman cepat, dan dukungan teknisi
                berpengalaman. Kami mendukung operasional Anda berjalan
                <span className="text-textMain font-semibold border-b border-primary/40">
                  {" "}
                  Tanpa Hambatan dan Tanpa Downtime{" "}
                </span>
                yang dapat mengganggu produktivitas.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
