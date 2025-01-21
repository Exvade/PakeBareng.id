import { motion } from 'framer-motion';
import testimonials from '../data/testimoni';

const TestimonialCard = ({ quote, author, role, pic }) => (
  <div className="flex flex-col flex-shrink-0 w-[300px] md:w-[500px] my-4 md:my-8 p-4 md:p-6 bg-white shadow-[5px_5px_0px_rgba(232,252,248,0.5)] rounded-xl md:rounded-2xl">
    <blockquote className="mb-3 md:mb-6 text-sm md:text-lg text-black">"{quote}"</blockquote>
    <div className="flex mt-auto items-center gap-3">
      <img src={pic} alt={author} className="object-cover w-7 md:w-10 h-7 md:h-10 rounded-full" />
      <div>
        <div className="font-semibold text-sm md:text-base text-black">{author}</div>
        <div className="text-xs md:text-sm text-slate-400">{role}</div>
      </div>
    </div>
  </div>
);

const Testimoni = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="w-full py-16 overflow-hidden bg-dark " id="testimoni">
      <div className="mx-auto">
        <div className="px-4">
          <h2 className="mb-4 text-2xl font-bold text-center text-white md:text-3xl">Yang mereka katakan tentang pakebareng.id?</h2>
          <p className="max-w-[330px] md:max-w-2xl mx-auto mb-5 md:mb-12 text-base md:text-lg text-center text-gray-400">
            Apa kata mereka tentang Pakebareng? Lihat pengalaman pengguna yang sudah merasakan kemudahan berbagi biaya langganan di sini! 🚀
          </p>
        </div>

        {/* Wrapper untuk animasi */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 w-max"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              ease: 'linear',
              duration: 40,
              repeat: Infinity,
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`dup-${index}`} {...testimonial} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
