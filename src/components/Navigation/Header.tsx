import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (sectionId: string) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-4 bg-white border-b border-gray-200 relative z-50">
      <button
        onClick={() => navigate('/')}
        className="font-['Bebas_Neue'] flex items-center gap-2.5 ml-4 lg:ml-[103px] hover:opacity-80"
      >
        <img src="/images/Logo1.svg" alt="Logo Sape-UERJ" className="w-[60px] h-[60px]" />
        <h1 className="text-[#2D875A] text-lg sm:text-2xl lg:text-5xl font-bold">1º SAPE-UERJ</h1>
      </button>

      <button
        className="lg:hidden text-3xl ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        ☰
      </button>

      <nav className={`absolute top-[70px] left-0 w-full bg-white shadow-md lg:shadow-none lg:static lg:w-auto ${menuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-24 text-lg lg:text-2xl font-darker font-bold p-4 lg:p-0">
          <li>
            <button
              onClick={() => handleNavigation('Schedule')}
              className="text-black font-['Darker_Grotesque'] no-underline  rounded px-4 py-2 font-bold hover:text-[#2D875A] w-full text-left lg:text-center"
            >
              PROGRAMAÇÃO
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavigation('Information')}
              className="text-black font-['Darker_Grotesque'] no-underline rounded px-4 py-2 font-bold hover:text-[#2D875A] w-full text-left lg:text-center"
            >
              SOBRE
            </button>
          </li>

          <li>
            <button
              onClick={() => handleNavigation('Join')}
              className="text-black font-['Darker_Grotesque'] no-underline  rounded px-4 py-2 font-bold hover:text-[#2D875A] w-full text-left lg:text-center"
            >
              AFILIE-SE
            </button>
          </li>

          <li>
            <button
              onClick={() => navigate('/patrocinadores')}
              className="text-black font-['Darker_Grotesque'] no-underline  rounded px-4 py-2 font-bold hover:text-[#2D875A] w-full text-left lg:text-center"
            >
              PATROCINADORES
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}