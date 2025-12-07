import React, { useState } from 'react';
import { Send, Phone, User, Building, MessageSquare } from 'lucide-react';

const BigCTA: React.FC = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    serviceType: 'Sewa Harian', // Default value
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // FORMAT PESAN WHATSAPP OTOMATIS
    // Ganti nomor ini dengan nomor WhatsApp admin Anda (format 62...)
    const adminNumber = "08123456789"; 
    
    const text = `Halo Mulya Diesel, saya ingin minta penawaran:%0A%0A` +
      `👤 Nama: ${formData.name}%0A` +
      `🏢 Perusahaan: ${formData.company || '-'}%0A` +
      `📱 No HP: ${formData.phone}%0A` +
      `🛠️ Kebutuhan: ${formData.serviceType}%0A` +
      `📝 Pesan: ${formData.message}`;

    // Membuka WhatsApp
    window.open(`https://wa.me/${adminNumber}?text=${text}`, '_blank');
  };

  return (
    // id="contact" agar navbar bisa scroll ke sini
    <section id="contact" className="py-24 px-6 md:px-8 bg-bgDark scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Container Utama */}
        <div className="relative rounded-[24px] overflow-hidden shadow-2xl min-h-[500px] flex items-center">
          
          {/* 1. BACKGROUND IMAGE LAYER */}
          <div className="absolute inset-0">
            <img 
              src="/images/contact_us.png" 
              alt="Background Forklift" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* 2. DARK OVERLAY LAYER */}
          <div className="absolute inset-0 bg-black/80"></div>

          {/* 3. CONTENT LAYER (Grid Layout: Kiri Teks, Kanan Form) */}
          <div className="relative z-10 w-full p-6 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* BAGIAN KIRI: Copywriting */}
            <div className="text-left">
              <h2 className="font-display font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
                Butuh Forklift Cepat? <br />
                <span className="text-primary">Hubungi Kami Sekarang!</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Jangan biarkan operasional terhambat. Isi formulir di samping untuk mendapatkan penawaran harga terbaik untuk unit <strong>Toyota & TCM</strong> kami.
                <br/><br/>
                <span className="flex items-center gap-2 text-primary font-semibold">
                  <Phone size={20} /> Respon Cepat 24/7
                </span>
              </p>
            </div>

            {/* BAGIAN KANAN: Form Penawaran */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl">
              <h3 className="text-white text-xl font-bold mb-6">Minta Penawaran Cepat</h3>
              
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                {/* Input Nama */}
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Nama Lengkap" 
                    required
                    className="w-full bg-black/40 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    onChange={handleChange}
                  />
                </div>

                {/* Input No HP */}
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Nomor WhatsApp" 
                    required
                    className="w-full bg-black/40 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    onChange={handleChange}
                  />
                </div>

                {/* Input Perusahaan (Optional) */}
                <div className="relative">
                  <Building className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input 
                    type="text" 
                    name="company"
                    placeholder="Nama Perusahaan (Opsional)" 
                    className="w-full bg-black/40 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    onChange={handleChange}
                  />
                </div>

                {/* Dropdown Layanan */}
                <div className="relative">
                   <select 
                      name="serviceType"
                      className="w-full bg-black/40 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none cursor-pointer"
                      onChange={handleChange}
                      value={formData.serviceType}
                   >
                      <option className="bg-gray-900" value="Sewa Harian">Sewa Harian</option>
                      <option className="bg-gray-900" value="Sewa Bulanan">Sewa Bulanan</option>
                      <option className="bg-gray-900" value="Service Forklift">Service Forklift</option>
                      <option className="bg-gray-900" value="Beli Unit">Beli Unit Forklift</option>
                   </select>
                   {/* Custom Arrow Icon for Select */}
                   <div className="absolute right-4 top-4 pointer-events-none">
                     <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                   </div>
                </div>

                {/* Textarea Pesan */}
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                  <textarea 
                    name="message"
                    rows={3}
                    placeholder="Detail kebutuhan (Misal: Forklift 3 ton untuk di Cikarang)"
                    className="w-full bg-black/40 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Tombol Submit */}
                <button type="submit" className="mt-2 w-full bg-primary hover:bg-yellow-400 text-bgDark font-bold py-3 rounded-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 shadow-lg">
                  Kirim via WhatsApp <Send size={18} />
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BigCTA;