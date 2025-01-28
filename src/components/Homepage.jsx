import canva from '../assets/canva.png'
import capcut from '../assets/capcut.png'
import chatgpt from '../assets/chatgpt.png'
import claude from '../assets/claude.png'
import sectionImage from '../assets/flat-illustration.webp'
import light from '../assets/light.png'
import netflix from '../assets/netflix.png'
import oval from '../assets/oval.png'
import perplexity from '../assets/perplexity.png'


export default function Homepage() {
  return (
    <section className="relative overflow-hidden bg-dark pt-[60px]">
      <img src={light} alt="" className='absolute w-full bottom-[50px] md:h-[700px] md:bottom-[300px]' />
      <img src={canva} alt="canva" className='w-[20px] absolute left-6 top-[94px] md:w-[60px] md:left-[84px] md:top-[127px] 2xl:left-[200px]' />
      <img src={claude} alt="canva" className='w-[20px] absolute left-10 top-[197px] md:w-[60px] md:left-[304px] md:top-[300px] 2xl:left-[300px]' />
      <img src={netflix} alt="canva" className='w-[20px] absolute left-4 top-[280px] md:w-[60px] md:left-[60px] md:top-[580px] 2xl:left-[80px]' />
      <img src={chatgpt} alt="canva" className='w-[20px] absolute right-8 top-[112px] md:w-[60px] md:right-[100px] md:top-[133px]  2xl:right-[200px]' />
      <img src={perplexity} alt="canva" className='w-[20px] absolute right-[75px] top-[210px] md:w-[60px] md:right-[150px] md:top-[368px]  2xl:right-[300px]' />
      <img src={capcut} alt="canva" className='w-[20px] absolute right-[21px] top-[281px] md:w-[60px] md:right-[50px] md:top-[543px]  2xl:right-[100px]' />
      <div className="container relative flex flex-col items-center justify-center px-4 pt-20 pb-32 mx-auto">
        <h1 className="w-[85%] max-w-[840px] font-bold text-center text-white text-[20px] lg:text-[54px] sm:text-4xl sm:leading-[40px] md:leading-[60px] md:text-[42px]">Nikmatin Layanan Premium Bersama, Hemat Biaya, Tanpa Berduka</h1>
        <div className="w-full max-w-4xl mt-4 md:mt-8">
          <img
            src={sectionImage}
            alt="Hero Illustration"
            width={800}
            height={400}
            className="w-[80%] mx-auto lg:w-full h-auto"
          />
        </div>
        <img src={oval} alt="" className='relative z-10 w-full -mt-4 md:-mt-12' />
      </div>
    </section>
  )
}

