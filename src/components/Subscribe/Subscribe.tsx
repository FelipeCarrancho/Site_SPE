export default function Subscribe () {
        return (
            <div className=" h-[400px] relative overflow-hidden">
                <div className="relative w-full h-full">
                    <img className='absolute w-full h-full object-cover z-[1]' src="/images/Cata-Vento.svg" alt="Logo Serra Energy" />
                </div>
                <div className="absolute z-[2] top-[15px] left-[11%] text-left text-white flex flex-col items-start">
                    <h1 className='text-[50px] mb-[10px] font-bold'>Conectando mentes<br/>brilhantes ao futuro<br/>da energia.</h1>
                    <h2 className='text-[25px] mb-[20px]'>3 a 6 de Novembro</h2>
                    <button className="bg-[#2D875A] hover:bg-[#39A26D] text-white text-[16px] font-bold py-3 px-6 rounded-[10px] transition-colors duration-300 ease-in-out">
                           INSCREVA-SE
                    </button>

                </div>
            </div>
        )
}