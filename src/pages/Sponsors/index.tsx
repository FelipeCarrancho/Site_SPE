import React from 'react';

const Sponsors: React.FC = () => {
  return (
    <>
      
      <div className="w-full bg-[#D5E7DE] p-10 text-center">
        <h2 className=" font-['Darker_Grotesque'] text-3xl  font-bold border-b-2 inline-block border-[#2D875A]">
          PATROCINADORES
        </h2>
      </div>

      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12 text-center ">
          <h3 className="text-lg font-['Darker_Grotesque'] font-semibold uppercase mb-4">Organização</h3>
          <div className="flex justify-center " >
              <img src="/images/SPE.svg"
                alt="Logo SPE"
                className="w-[180px]"/>
              <img src="/images/LogoAAPG.svg"
                alt="Logo AAPG"
                className="w-[320px] ml-[200px]"/>
                
            </div>

        </section>

        <section className="mb-12 text-center">
          <h3 className="text-lg font-['Darker_Grotesque'] font-semibold uppercase mb-4">Platina</h3>
          <div className="" />
        </section>

        <section className="mb-12 text-center">
          <h3 className="text-lg font-['Darker_Grotesque'] font-semibold uppercase mb-4">Ouro</h3>
          <div className="" />
        </section>

        <section className="mb-12 text-center">
          <h3 className="text-lg font-['Darker_Grotesque'] font-semibold uppercase mb-4">Prata</h3>
          <div className="" />
        </section>

        <section className="mb-12 text-center">
          <h3 className="text-lg font-['Darker_Grotesque'] font-semibold uppercase mb-4">Bronze</h3>
          <div className="" />
        </section>
      </main>
    </>
  );
};

export default Sponsors;
