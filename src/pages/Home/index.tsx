import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Subscribe from '../../components/Subscribe/Subscribe';
import Countdown from '../../components/Countdown/Countdown';
import Schedule from '../../components/Schedule/Schedule';
import Information from '../../components/Information/Information';
import Join from '../../components/Join/Join';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <>
      <section id="Subscribe">
        <Subscribe />
      </section>
      <section id="Countdown">
        <Countdown />
      </section>
      <section id="Schedule">
        <Schedule />
      </section>
      <section id="Information">
        <Information />
      </section>
      <section id="Join">
        <Join />
      </section>
    </>
  );
}
