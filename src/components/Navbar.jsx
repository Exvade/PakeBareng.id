import logo from '../assets/LogoType-White.png';
import discordIcon from '../assets/discord-icon.png';

export default function Navbar() {
  return (
    <nav className="bg-dark border-gray-200 w-full h-[60px] sm:h-[75px]">
      <div className="w-full h-full mx-auto px-6 sm:px-16">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0">
            <img src={logo} className="h-5 sm:h-7" alt="Logo Pakebareng" />
          </div>
          <div>
            <ul className="flex space-x-8 text-sm sm:text-base text-white">
              <li>
                <a href="/" className="hover:text-green">
                  Beranda
                </a>
              </li>
              <li>
                <a href="aboutus" className="hover:text-green">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="product" className="hover:text-green">
                  Produk
                </a>
              </li>
              <li>
                <a href="testimoni" className="hover:text-green">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="faq" className="hover:text-green">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center space-x-3 ">
              <button className="group relative flex flex-row items-center px-6 py-2 rounded-full text-xs sm:text-sm bg-[#324a54] text-white cursor-pointer duration-300 overflow-hidden hover:bg-[#233941]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 nimate-gradient-xa"></div>
                </div>

                <img src={discordIcon} className="h-5 sm:h-6 pr-2 relative transition-transform duration-300 group-hover:scale-110" alt="Icon Discord" />
                <span className="relative z-10 transition-all duration-300 group-hover:translate-y-0 ">Bergabung ke Grup</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
