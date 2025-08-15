export default function Information() {
    return (
        <section id="Information">
            <div className="bg-[#0A3C4B] w-full py-16 px-4 font-darker">
                <div className="max-w-7xl mx-auto">

                    {/* SOBRE NÓS */}
                    <div className="font-[Darker Grotesque] flex flex-col md:flex-row items-start mb-16">
                        <div className="flex flex-col flex-1 md:mr-8 mb-8 md:mb-0">
                            <h1 className="text-[#45C484] font-bold mb-6 text-4xl sm:text-5xl">O que é o evento?</h1>
                            <p className="text-justify text-2xl text-white font-[darker Grotesque] mb-6">
                                O SAPE - UERJ é um evento sem fins lucrativos, organizado por estudantes de engenharia da UERJ do Rio de Janeiro e Nova Friburgo.
                                O evento busca apresentar aos estudantes e jovens profissionais da região serrana as novas tendências no mercado energético, bem como experiências com experts na área.
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
                                Nosso objetivo é disseminar conhecimento sobre a indústria energética e gerar interação e networking entre estudantes, 
                                profissionais e empresas, buscando aproximar estudantes e instituições acadêmicas das empresas para criar uma ponte para estágios, 
                                pesquisas e desenvolvimento de projetos. Para isso, trabalhamos para engajar diferentes públicos em discussões sobre o futuro, os desafios e tendências do setor, 
                                e também promover o desenvolvimento profissional e técnico através de capacitação, cursos e palestras, com o intuito final de divulgar o impacto positivo do setor na economia e sociedade.
                            </p>
                        </div>
                    </div>

                    {/* EVENTO */}
                    <div className="flex flex-col md:flex-row items-start mb-16">
                        <div className="flex flex-col flex-1 md:mr-8 mb-8 md:mb-0">
                            <h3 className="text-[#45C484] font-bold mb-6 text-4xl sm:text-5xl">Planejamento do evento</h3>
                            <p className="text-justify text-2xl text-white font-[darker Grotesque] mb-6">
                                Nossa programação foi cuidadosamente elaborada para oferecer uma experiência completa de aprendizado e networking. Ao longo do evento, você poderá participar de palestras ministradas por especialistas da indústria, 
                                que compartilharão conhecimento e apresentarão as mais recentes inovações do setor.
                                Também teremos cursos práticos voltados à capacitação em áreas estratégicas, como bombas e turbocompressores, além de desenvolver habilidades interpessoais essenciais, incluindo soft skills e inteligência emocional.
                                Para promover a troca de ideias e perspectivas, realizaremos uma mesa redonda, proporcionando um espaço aberto para discutir os desafios e as tendências que moldam o futuro da indústria.
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
