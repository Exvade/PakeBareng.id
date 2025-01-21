import { useState } from 'react';
import faqImg from '../assets/faq-img.webp';
import faqData from '../data/faqData.json';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="w-full px-4 py-12 bg-dark md:px-6">
      <div className="flex items-center max-w-6xl gap-20 mx-auto">
        <div className="hidden md:block w-[25%]">
          <img src={faqImg} alt="" className="w-full" />
        </div>
        <div className="w-full md:w-[70%]">
          <h2 className="mb-2 text-2xl font-semibold text-center text-green md:text-3xl md:text-left drop-shadow-[0px_0px_25px_#78D792]">
            <span className="md:inline">Frequently Asked Questions</span>
          </h2>
          <p className="mb-8 text-sm text-center text-gray-400 md:text-left">Butuh info lebih lanjut? Cek pertanyaan yang sering ditanyakan di sini. Kalau belum ketemu jawabannya, langsung tanyakan di Discord!</p>

          <div className="space-y-2">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-green">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex items-center justify-between w-full py-4 text-left group">
                  <span
                    className={`font-medium transition-colors duration-200 
                    ${openIndex === index ? 'text-green drop-shadow-[0px_0px_4px_#78D792]' : 'text-white'}`}
                  >
                    {item.question}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={`w-5 h-5 transition-transform duration-200 
                      ${openIndex === index ? 'transform rotate-0' : 'transform rotate-180'}`}
                  >
                    <path fill="none" stroke="#4EBD77" strokeDasharray="12" strokeDashoffset="12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8l-7 7M12 8l7 7">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></animate>
                    </path>
                  </svg>
                </button>
                {openIndex === index && <div className="pb-4 text-white">{item.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
