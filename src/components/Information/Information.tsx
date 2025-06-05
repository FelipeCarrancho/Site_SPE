export default function Information() {
    return (
        <section id="Information">
            <div className="bg-[#0A3C4B] w-full py-16 px-4 font-darker">
                <div className="max-w-7xl mx-auto">

                    {/* SOBRE NÓS */}
                    <div className="font-[Darker Grotesque] flex flex-col md:flex-row items-start mb-16">
                        <div className="flex flex-col flex-1 md:mr-8 mb-8 md:mb-0">
                            <h1 className="text-[#45C484] font-bold mb-6 text-4xl sm:text-5xl">Sobre nós</h1>
                            <p className="text-justify text-2xl text-white font-[darker Grotesque] mb-6">
                                O Capítulo Estudantil UERJ da SPE faz parte da Society of Petroleum Engineers (SPE),
                                a maior associação mundial de profissionais no segmento upstream da indústria de óleo e gás,
                                servindo gestores, engenheiros, cientistas e outros profissionais. Fundado em outubro de 2018,
                                nosso capítulo tem como objetivo conectar estudantes da Universidade do Estado do Rio de Janeiro (UERJ) à indústria,
                                promovendo aprendizado técnico, desenvolvimento profissional e networking.
                            </p>
                        </div>

                        <div className="flex-shrink-0 mx-auto md:mx-0">
                            <img
                                src="/images/SPE-Black.svg"
                                alt="Logo SPE"
                                className="w-[250px] sm:w-[350px] md:w-[450px] h-auto rounded-[2rem] md:rounded-[4rem]"
                            />
                        </div>
                    </div>

                    {/* MISSÃO */}
                    <div className="flex flex-col md:flex-row items-start mb-16">
                        <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 mx-auto md:mx-0">
                            <img
                                src="/images/SPE-Black.svg"
                                alt="Logo SPE"
                                className="w-[250px] sm:w-[350px] md:w-[450px] h-auto rounded-[2rem] md:rounded-[4rem]"
                            />
                        </div>

                        <div className="flex flex-col flex-1">
                            <h2 className="text-[#45C484] font-bold mb-6 text-4xl sm:text-5xl">A nossa missão</h2>
                            <p className="text-justify text-2xl text-white font-[darker Grotesque] mb-6">
                                Nossa missão é coletar, disseminar e trocar conhecimento técnico sobre a exploração e produção de petróleo e gás,
                                proporcionando oportunidades para que estudantes aprimorem suas competências e interajam com profissionais do setor.
                                Por meio da organização e participação em eventos, como conferências, workshops, minicursos, visitas técnicas e atividades sociais,
                                buscamos agregar valor à formação acadêmica e profissional de nossos membros.
                            </p>
                        </div>
                    </div>

                    {/* EVENTO */}
                    <div className="flex flex-col md:flex-row items-start mb-16">
                        <div className="flex flex-col flex-1 md:mr-8 mb-8 md:mb-0">
                            <h3 className="text-[#45C484] font-bold mb-6 text-4xl sm:text-5xl">O que é evento?</h3>
                            <p className="text-justify text-2xl text-white font-[darker Grotesque] mb-6">
                                O Serra Energy é um evento sem fins lucrativos, organizado por estudantes de engenharia da UERJ do Rio de Janeiro e Nova Friburgo.
                                O evento busca apresentar aos estudantes e jovens profissionais da região serrana as novas tendências no mercado energético,
                                bem como experiências com experts na área. Em 2025, será realizada a sua primeira edição, na cidade de Nova Friburgo,
                                nos dias 10 a 13 de novembro.
                            </p>
                        </div>

                        <div className="flex-shrink-0 mx-auto md:mx-0">
                            <img
                                src="/images/SPE-Black.svg"
                                alt="Logo SPE"
                                className="w-[250px] sm:w-[350px] md:w-[450px] h-auto rounded-[2rem] md:rounded-[4rem]"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
