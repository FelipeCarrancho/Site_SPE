export default function Join() {
    
    const AfilieseTitle = () => (
      <div>
        <div className="font-['Bebas_Neue'] absolute bottom-[80px] left-0 w-full flex flex-col justify-center z-0">
              <div className="text-transparent text-7xl px-4 mb-4" style={{WebkitTextStroke: '1px #45C484'}}>
                  AFILIE-SE
              </div>

              <div className="text-transparent text-7xl px-4 mb-4" style={{WebkitTextStroke: '1px #45C484'}}>
                  AFILIE-SE
              </div>

              <div className="text-transparent text-7xl px-4 mb-4" style={{WebkitTextStroke: '1px #45C484'}}>
                  AFILIE-SE
              </div>

              <div className="text-transparent text-7xl px-4 mb-4" style={{WebkitTextStroke: '1px #45C484'}}>
                  AFILIE-SE
              </div>

              <div className="text-[#45C484] text-7xl  px-4 mb-4">
                  AFILIE-SE
              </div>
          </div>
      </div>
        
        
    );

    return(
        <section id="Join">

            <div className='bg-white w-full pt-8 pb-20 px-4 overflow-hidden'>
                <div className='relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between'>
                    
                    <AfilieseTitle />

                    <div className="max-w-lg">
                        <div className="font-['Darker_Grotesque'] flex flex-col items-center md:items-start">
                            <div className="flex items-center mb-6">
                                <img src="/images/SPE-White.svg" alt="Logo SPE Branca" className="w-30 h-30 mr-4"/>
                                <h2 className="text-6xl text-center font-bold text-[#0A3C4B]">Sobre a SPE</h2>
                            </div>
                            <p className="mb-6 text-justify text-lg leading-relaxed font-semibold">
                            A Society of Petroleum Engineers (SPE) impulsiona o avanço técnico e inovação, na indústria de petróleo, gás e energia, promovendo crescimento técnico e desenvolvimento na carreira.
                            </p>
                            
                            <a 
                            href="#" className="bg-[#0A3C4B] text-white px-6 py-2 rounded-full font-medium hover:bg-[#002233] transition-colors">
                                AFILIE-SE
                            </a>
                        </div>
                    </div>

                    <div className="max-w-lg">
                        <div className="font-['Darker_Grotesque'] flex flex-col items-center md:items-start">
                            <div className="flex items-center mb-6">
                                <img src="/images/LogoAAPG.svg" alt="Logo AAPG" className="w-30 h-30 mr-4"/>
                                <h2 className="text-6xl text-center font-bold text-[#0A3C4B]">Sobre a AAPG</h2>
                            </div>
                            <p className="mb-6 text-justify text-lg leading-relaxed font-semibold">
                            O propósito original da AAPG (American Association of Petroleum Geologists) é fomentar a pesquisa científica, promover a ciência da geologia, a tecnologia e inspirar uma conduta profissional de alto nível.
                            </p>
                            
                            <a 
                            href="#" className="bg-[#0A3C4B] text-white px-6 py-2 rounded-full font-medium hover:bg-[#002233] transition-colors">
                                AFILIE-SE
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    ) 
}