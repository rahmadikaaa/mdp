import React from 'react';
import { Construction, MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bgDark border-t border-borderDark pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Construction className="text-primary" size={28} />
              <span className="font-display font-bold text-2xl text-textMain">
                Mulya <span className="text-primary">Diesel Pratama</span>
              </span>
            </div>
            <p className="text-textSecondary text-sm leading-relaxed max-w-xs">
            Memberikan Solusi Yang Tepat Secara Total dan Berintegrasi Untuk Kebutuhan Operasional Anda
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-textSecondary hover:text-primary transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-display font-bold text-textMain mb-6 text-lg">Menu</h4>
            <ul className="space-y-4">
              {['Beranda', 'Layanan', 'Tentang', 'Hubungi Kami', 'Dapatkan Penawaran'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-textSecondary hover:text-primary text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-textMain mb-6 text-lg">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-textSecondary text-sm">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>Kp. Gardu No. 8, Kelurahan Kramat, Kecamatan Pakuhaji<br/>Kabupaten Tangerang, Banten 15570</span>
              </li>
              <li className="flex items-center gap-3 text-textSecondary text-sm">
                <Phone className="text-primary shrink-0" size={18} />

                <span>+62 87809161298</span>
                <span>+62 82312045606 </span>
              </li>
              <li className="flex items-center gap-3 text-textSecondary text-sm">
                <Mail className="text-primary shrink-0" size={18} />
                <span>mulyadieselforklift@gmail.com</span>
              </li>
            </ul>
          </div>


        </div>

        {/* Bottom */}
        <div className="border-t border-borderDark pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-textSecondary text-xs">
            &copy; {new Date().getFullYear()} Mulya Diesel Pratama. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-textSecondary text-xs hover:text-white">Privacy Policy</a>
            <a href="#" className="text-textSecondary text-xs hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;