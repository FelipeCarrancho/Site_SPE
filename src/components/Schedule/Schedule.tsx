import { useState } from "react";

type CardDay = 'segunda' | 'terca' | 'quarta' | 'quinta';

export default function Schedule() {
  const [flippedCards, setFlippedCards] = useState<Record<CardDay, boolean>>({
    segunda: false,
    terca: false,
    quarta: false,
    quinta: false
  });

  const toggleCard = (day: CardDay) => {
    setFlippedCards(prev => ({ ...prev, [day]: !prev[day] }));
  };

  return (
    <section id="Schedule" className="relative">
      <style>{`
        .flip-container { perspective: 1000px; cursor: pointer; }
        .flip-card { transform-style: preserve-3d; transition: transform 0.6s; }
        .flip-card.flipped { transform: rotateY(180deg); }
        @media (hover: hover) { 
          .flip-container:hover .flip-card:not(.clicked) { transform: rotateY(180deg); } 
        }
        .flip-front, .flip-back { backface-visibility: hidden; }
        .flip-back { transform: rotateY(180deg); }
      `}</style>

      <div className="absolute sm:bottom-[-40px] md:bottom-[-55px] lg:bottom-[-60px] left-0 w-full flex justify-center z-0">
        <h1 className="text-[#0A3C4B] sm:text-[80px] md:text-[120px] x1:text-[160px] font-bold opacity-10">
          PROGRAMAÇÃO
        </h1>
      </div>

      <h2 className="text-center text-[50px] font-bold text-[#0A3C4B] bg-[#D5E7DE]">
        Programação do evento
      </h2>

      <div className="w-full flex flex-col justify-center items-center flex-wrap gap-8 sm:py-32 sm:gap-10 md:flex-row md:gap-16 bg-[#D5E7DE] px-4 py-12">
        {/* Segunda-feira */}
        <div
          className="flip-container w-full max-w-xs sm:max-w-sm md:max-w-[330px] h-[414px]"
          onClick={() => toggleCard("segunda")}
        >
          <div
            className={`flip-card w-full h-full relative ${
              flippedCards.segunda ? "flipped clicked" : ""
            }`}
          >
            {/* Frente */}
            <div className="flip-front absolute inset-0 bg-[#2D875A] flex flex-col justify-end rounded-[30px] p-[5px] overflow-hidden">
              <div className="absolute bottom-[-90px] left-[-60px] w-[150px] h-[250px] bg-[#39A26D] rotate-[-45deg] z-0"></div>
              <div className="absolute top-[20px] right-[2px] -rotate-90 text-white text-[10px]">
                SAPE <br /> UERJ
              </div>
              <div className="absolute top-[15px] left-0 right-0 flex justify-between px-[70px]">
                <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
              </div>
              <div className="flex justify-center items-center flex-grow pt-[110px]">
                <img
                  className="h-[110px]"
                  src="/images/Logo2.svg"
                  alt="Logo Sape-Uerj"
                />
              </div>
              <div className="text-right mb-[30px]">
                <h1 className="text-white text-[54px] font-bold m-0 leading-[1.2]">
                  SEGUNDA
                </h1>
                <h1 className="text-white text-[54px] font-bold m-0 leading-[1.2]">
                  FEIRA
                </h1>
              </div>
            </div>
            {/* Verso */}
            <div className="flip-back absolute inset-0 bg-[#39A26D] sm:p-[15px] flex flex-col justify-center items-center rounded-[30px] p-6 text-white overflow-hidden">
              <div className="text-center">
                <div className="absolute top-[15px] left-0 right-0 flex justify-between px-[70px]">
                  <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                  <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                </div>
                <h3 className="text-[24px] font-bold mt-4 mb-4">
                  SEGUNDA-FEIRA
                </h3>
                <div className="space-y-3 text-[14px]">
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">09:00 - 10:00</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">10:00 - 11:30</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">11:30 - 12:00</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">12:00 - 13:30</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div>
                    <p className="font-semibold">13:30 - 14:30</p>
                    <p>Novidades em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Terça-feira */}
        <div
          className="flip-container w-full max-w-xs sm:max-w-sm md:max-w-[330px] h-[414px]"
          onClick={() => toggleCard("terca")}
        >
          <div
            className={`flip-card w-full h-full relative ${
              flippedCards.terca ? "flipped clicked" : ""
            }`}
          >
            {/* Frente */}
            <div className="flip-front absolute inset-0 bg-[#0A3C4B] flex flex-col justify-end rounded-[30px] p-[5px] overflow-hidden">
              <div className="absolute bottom-[-90px] left-[-60px] w-[150px] h-[250px] bg-[#125A70] rotate-[-45deg] z-0"></div>
              <div className="absolute top-[20px] right-[2px] -rotate-90 text-white text-[10px]">
                SAPE <br /> UERJ
              </div>
              <div className="absolute top-[15px] left-0 right-0 flex justify-between px-[70px]">
                <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
              </div>
              <div className="flex justify-center items-center flex-grow pt-[110px]">
                <img
                  className="h-[110px]"
                  src="/images/Logo2.svg"
                  alt="Logo Sape-Uerj"
                />
              </div>
              <div className="text-right mb-[30px]">
                <h1 className="text-white text-[54px] font-bold m-0 leading-[1.2]">
                  TERÇA
                </h1>
                <h1 className="text-white text-[54px] font-bold m-0 leading-[1.2]">
                  FEIRA
                </h1>
              </div>
            </div>
            {/* Verso */}
            <div className="flip-back absolute inset-0 bg-[#125A70] flex flex-col justify-center items-center rounded-[30px] p-6 text-white">
              <div className="text-center">
                <div className="absolute top-[15px] left-0 right-0 flex justify-between px-[70px]">
                  <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                  <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                </div>
                <h3 className="text-[24px] font-bold mt-4 mb-4">TERÇA-FEIRA</h3>
                <div className="space-y-3 text-[14px]">
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">09:00 - 10:30</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">10:30 - 11:00</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">11:00 - 12:30</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">12:30 - 14:00</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div>
                    <p className="font-semibold">14:00 - 15:30</p>
                    <p>Novidades em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quarta-feira */}
        <div
          className="flip-container w-full max-w-xs sm:max-w-sm md:max-w-[330px] h-[414px]"
          onClick={() => toggleCard("quarta")}
        >
          <div
            className={`flip-card w-full h-full relative ${
              flippedCards.quarta ? "flipped clicked" : ""
            }`}
          >
            {/* Frente */}
            <div className="flip-front absolute inset-0 bg-[#2D875A] flex flex-col justify-end rounded-[30px] p-[5px] overflow-hidden">
              <div className="absolute bottom-[-90px] left-[-60px] w-[150px] h-[250px] bg-[#39A26D] rotate-[-45deg] z-0"></div>
              <div className="absolute top-[20px] right-[2px] -rotate-90 text-white text-[10px]">
                SAPE <br /> UERJ
              </div>
              <div className="absolute top-[15px] left-0 right-0 flex justify-between px-[70px]">
                <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
              </div>
              <div className="flex justify-center items-center flex-grow pt-[110px]">
                <img
                  className="h-[110px]"
                  src="/images/Logo2.svg"
                  alt="Logo Sape-Uerj"
                />
              </div>
              <div className="text-right mb-[30px]">
                <h1 className="text-white text-[54px] font-bold m-0 leading-[1.2]">
                  QUARTA
                </h1>
                <h1 className="text-white text-[54px] font-bold m-0 leading-[1.2]">
                  FEIRA
                </h1>
              </div>
            </div>
            {/* Verso */}
            <div className="flip-back absolute inset-0 bg-[#39A26D] flex flex-col justify-center items-center rounded-[30px] p-6 text-white">
              <div className="text-center">
                <div className="absolute top-[15px] left-0 right-0 flex justify-between px-[70px]">
                  <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                  <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                </div>
                <h3 className="text-[24px] font-bold mt-4 mb-4">
                  QUARTA-FEIRA
                </h3>
                <div className="space-y-3 text-[14px]">
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">09:00 - 10:30</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">10:30 - 11:00</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">11:00 - 12:30</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">12:30 - 14:00</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div>
                    <p className="font-semibold">14:00 - 15:30</p>
                    <p>Novidades em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quinta-feira */}
        <div
          className="flip-container w-full max-w-xs sm:max-w-sm md:max-w-[330px] h-[414px]"
          onClick={() => toggleCard("quinta")}
        >
          <div
            className={`flip-card w-full h-full relative ${
              flippedCards.quinta ? "flipped clicked" : ""
            }`}
          >
            {/* Frente */}
            <div className="flip-front absolute inset-0 bg-[#0A3C4B] flex flex-col justify-end rounded-[30px] p-[5px] overflow-hidden">
              <div className="absolute bottom-[-90px] left-[-60px] w-[150px] h-[250px] bg-[#125A70] rotate-[-45deg] z-0"></div>
              <div className="absolute top-[20px] right-[2px] -rotate-90 text-white text-[10px]">
                SAPE <br /> UERJ
              </div>
              <div className="absolute top-[15px] left-0 right-0 flex justify-between px-[70px]">
                <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
              </div>
              <div className="flex justify-center items-center flex-grow pt-[110px]">
                <img
                  className="h-[110px]"
                  src="/images/Logo2.svg"
                  alt="Logo Sape-Uerj"
                />
              </div>
              <div className="text-right mb-[30px]">
                <h1 className="text-white text-[54px] font-bold m-0 leading-[1.2]">
                  QUINTA
                </h1>
                <h1 className="text-white text-[54px] font-bold m-0 leading-[1.2]">
                  FEIRA
                </h1>
              </div>
            </div>
            {/* Verso */}
            <div className="flip-back absolute inset-0 bg-[#125A70] flex flex-col justify-center items-center rounded-[30px] p-6 text-white">
              <div className="text-center">
                <div className="absolute top-[15px] left-0 right-0 flex justify-between px-[70px]">
                  <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                  <div className="w-[25px] h-[25px] bg-white rounded-full"></div>
                </div>
                <h3 className="text-[24px] font-bold mt-4 mb-4">
                  QUINTA-FEIRA
                </h3>
                <div className="space-y-3 text-[14px]">
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">09:00 - 10:30</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">10:30 - 11:00</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">11:00 - 12:30</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div className="border-b border-white/20 pb-2">
                    <p className="font-semibold">12:30 - 14:00</p>
                    <p>Novidades em breve</p>
                  </div>
                  <div>
                    <p className="font-semibold">14:00 - 16:00</p>
                    <p>Novidades em breve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
