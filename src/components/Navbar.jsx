import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/LogoType-White.png';
import discordIcon from '../assets/discord-icon.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-dark border-gray-200 w-full h-[60px] sm:h-[75px] fixed top-0 z-50">
      <div className="w-full h-full px-6 mx-auto sm:px-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0 cursor-pointer">
            <img src={logo} className="h-5 sm:h-7" alt="Logo Pakebareng" />
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-10 text-sm text-white sm:text-base">
              <li>
                <a href="/" className="hover:text-green">
                  Beranda
                </a>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('about')} className="hover:text-green">
                  Tentang Kami
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('product')} className="hover:text-green">
                  Produk
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('testimoni')} className="hover:text-green">
                  Testimoni
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollToSection('faq')} className="hover:text-green">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-3 ">
              <button className="group relative flex flex-row items-center px-6 py-2 rounded-full text-xs sm:text-sm bg-[#324a54] text-white cursor-pointer duration-300 overflow-hidden hover:bg-[#233941]">
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
                </div>

                <img src={discordIcon} className="relative h-5 pr-2 transition-transform duration-300 sm:h-6 group-hover:scale-110" alt="Icon Discord" />
                <span className="relative z-10 transition-all duration-300 group-hover:translate-y-0 ">Bergabung ke Grup</span>
              </button>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`md:hidden absolute left-0 right-0 bg-dark px-6 py-4 transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <ul className="flex flex-col space-y-4 text-white">
            <li>
              <a href="/" className="hover:text-green">
                Beranda
              </a>
            </li>
            <li>
              <button onClick={() => handleScrollToSection('about')} className="hover:text-green">
                Tentang Kami
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection('product')} className="hover:text-green">
                Produk
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection('testimoni')} className="hover:text-green">
                Testimoni
              </button>
            </li>
            <li>
              <button onClick={() => handleScrollToSection('faq')} className="hover:text-green">
                FAQ
              </button>
            </li>
            <li>
              <button className="group relative flex flex-row items-center px-6 py-2 rounded-full text-xs sm:text-sm bg-[#324a54] text-white cursor-pointer duration-300 overflow-hidden hover:bg-[#233941] w-full">
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
                </div>
                <img src={discordIcon} className="relative h-5 pr-2 transition-transform duration-300 sm:h-6 group-hover:scale-110" alt="Icon Discord" />
                <span className="relative z-10 transition-all duration-300 group-hover:translate-y-0">Bergabung ke Grup</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
