export default function Footer() {
  return (
    <footer className="bg-[#2D875A] text-white py-[10px] px-[20px] w-full box-border mt-auto">

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1200px] w-full px-4 mx-auto">

        <div className="text-base leading-snug text-center md:text-left w-full md:w-auto">
          <p className="m-0">
            Desenvolvido por Serra Jr. Engenharia, todos os direitos reservados © 2025 
          </p>
        </div>

        <div className="flex gap-4 flex-wrap justify-center md:justify-end w-full md:w-auto">

          <a href="mailto:sape@iprj.uerj.br" className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer">
            <img src="/images/Email.svg" alt="Email" className="w-[26px] h-[26px]" />
          </a>

          <a href="https://www.linkedin.com/showcase/sape-uerj/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer">
            <img src="/images/Linkedin.svg" alt="Linkedin" className="w-[26px] h-[26px]" />
          </a>

          <a
            href="https://www.instagram.com/sape.uerj/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center rounded-full hover:translate-y-[-2px] transition-transform duration-200 cursor-pointer">
            <img src="/images/Instagram.svg" alt="Instagram" className="w-[26px] h-[26px]" />
          </a>

         

        </div>
      </div>
    </footer>
  );
}
