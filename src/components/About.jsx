import aboutusImg from '/aboutus.png';

export default function FAQ() {
  return (
    <section id="faq" className="w-full bg-dark py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-center items-center max-w-3xl gap-5 md:gap-14 mx-auto">
        <div className="block w-[45%] md:w-[25%]">
          <img src={aboutusImg} alt="" className="w-full" />
        </div>
        <div className="w-full md:w-[70%]">
          <p className="mb-4 md:mb-6 text-base text-center leading-7 text-gray-400 md:text-left">
            Pakebareng adalah platform komunitas berbasis Discord yang memungkinkan Anda berbagi biaya langganan akun premium dengan pengguna lain secara aman dan terpercaya. Kami menghubungkan orang-orang yang ingin menghemat biaya
            langganan layanan digital premium melalui sistem patungan yang terorganisir dan transparan.
          </p>
        </div>
      </div>
    </section>
  );
}
