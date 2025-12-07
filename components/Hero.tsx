import React, { useRef } from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {

  const carouselRef = useRef<HTMLDivElement>(null);

  // -------------------------
  // DRAG / SWIPE HANDLER
  // -------------------------
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const startDrag = (e: any) => {
    isDragging = true;
    startX = e.pageX - e.currentTarget.offsetLeft;
    scrollLeft = e.currentTarget.scrollLeft;
  };

  const stopDrag = () => {
    isDragging = false;
  };

  const drag = (e: any) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1.4;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  // TOUCH HANDLER
  const startTouch = (e: any) => {
    startDrag({ pageX: e.touches[0].pageX, currentTarget: e.currentTarget });
  };

  const moveTouch = (e: any) => {
    drag({
      preventDefault: () => {},
      pageX: e.touches[0].pageX,
      currentTarget: e.currentTarget
    });
  };

  // BUTTON NEXT / PREV
  const slide = (next = true) => {
    const slider = carouselRef.current;
    if (!slider) return;

    const width = slider.clientWidth;
    slider.scrollBy({ left: next ? width : -width, behavior: "smooth" });
  };

  const forkliftUnits = [
    { img: "/images/forklift3ton.png", label: "Forklift 3 Ton" },
    { img: "/images/forklift5ton.png", label: "Forklift 5 Ton" },
    { img: "/images/forklift7ton.png", label: "Forklift 7 Ton" },
    { img: "/images/forklift10ton.png", label: "Forklift 10 Ton" }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center pt-24 pb-24 overflow-hidden bg-bgDark">

      {/* BG Layer */}
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

        {/* TEXT CONTENT */}
        <div className="relative pl-6 lg:pl-8 border-l-4 border-primary">
          <div className="space-y-8">

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-[64px] leading-[1.1] text-textMain tracking-tight">
              Sewa Forklift <span className="text-primary">Cepat & Terpercaya</span>
            </h1>

            <div className="flex flex-wrap gap-3">
              {['Ready 24 Jam', 'Unit Terawat', 'Respon Cepat'].map((badge) => (
                <span key={badge} className="px-4 py-1.5 rounded-full border border-borderDark bg-surfaceDark text-xs font-semibold text-textSecondary uppercase tracking-wider flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-textSecondary text-lg md:text-[17px] leading-[1.6] max-w-xl">
              Memberikan Solusi Yang Tepat Secara Total dan Berintegrasi Untuk Kebutuhan Operasional Anda
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="bg-primary hover:bg-yellow-300 text-bgDark px-6 py-3 rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(242,242,13,0.3)]">
                Dapatkan Penawaran
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>

              <button className="border border-borderDark text-textMain hover:bg-surfaceDark px-6 py-3 rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2">
                <Phone size={18} />
                Hubungi Kami
              </button>
            </div>

          </div>
        </div>

        {/* ---------------------- */}
        {/*  CAROUSEL SECTION     */}
        {/* ---------------------- */}
        <div className="relative group max-w-sm mx-auto lg:max-w-none">


          {/* Background highlight */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>

          <div className="relative rounded-2xl border border-borderDark bg-surfaceDark/50 backdrop-blur-sm p-4 shadow-2xl">

            {/* CAROUSEL WRAPPER */}
            <div
              ref={carouselRef}
              id="carousel"
              className="flex overflow-hidden scroll-smooth snap-x snap-mandatory select-none"
              onMouseDown={startDrag}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
              onMouseMove={drag}
              onTouchStart={startTouch}
              onTouchMove={moveTouch}
            >

              {forkliftUnits.map((unit, i) => (
                <div key={i} className="min-w-full snap-start">

                  <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={unit.img}
                      alt={unit.label}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />

                    {/* FLOATING CARD */}
                    <div className="absolute bottom-6 left-6 right-6 bg-bgDark/90 backdrop-blur-md p-4 rounded-xl border border-borderDark flex items-center justify-between">
                      <div>
                        <p className="text-textSecondary text-xs uppercase tracking-widest mb-1">Unit Available</p>
                        <p className="text-textMain font-display font-bold">{unit.label}</p>
                      </div>
                      <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-bgDark">
                        <CheckCircle2 size={20} />
                      </div>
                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* BUTTON NEXT / PREV */}
            <button 
              onClick={() => slide(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-bgDark/60 hover:bg-bgDark text-white px-3 py-2 rounded-full"
            >‹</button>

            <button 
              onClick={() => slide(true)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-bgDark/60 hover:bg-bgDark text-white px-3 py-2 rounded-full"
            >›</button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
