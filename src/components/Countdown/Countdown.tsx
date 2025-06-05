import { useEffect, useState } from "react";


const targetDate = new Date("2025-11-10T00:00:00");


function getTimeRemaining(endTime: Date) {
  const total = endTime.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

// Componente animado para número com flip sincronizado
const AnimatedNumber = ({ value }: { value: number }) => {
  const [prevValue, setPrevValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== prevValue) {
      setIsFlipping(true);
      const timeout = setTimeout(() => {
        setPrevValue(value);
        setIsFlipping(false);  
      }, 900); // duração da animação
      return () => clearTimeout(timeout);
    }
  }, [value, prevValue]);

  return (
    <div className="h-20 w-20 flex justify-center items-center [perspective:1000px]">
      <span
        className={`text-5xl font-bold text-white transition-transform duration-500 ${
          isFlipping ? "animate-flip" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
};

// Caixa de contagem com rótulo e valor animado
const CountdownBox = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => (
  <div
    className="
      relative bg-[#2D875A] rounded-xl px-10 py-8 text-white 
      flex flex-col items-center shadow-md min-w-[110px]
      [&::before]:content-[''] [&::before]:absolute [&::before]:top-1/2 [&::before]:left-[-6px]
      [&::before]:-translate-y-1/2 [&::before]:w-3 [&::before]:h-6 [&::before]:bg-[#FFFFFF] [&::before]:rounded-full
      [&::after]:content-[''] [&::after]:absolute [&::after]:top-1/2 [&::after]:right-[-6px]
      [&::after]:-translate-y-1/2 [&::after]:w-3 [&::after]:h-6 [&::after]:bg-[#FFFFFF] [&::after]:rounded-full
    "
  >
    <AnimatedNumber value={value} />
    <span className="text-sm font-semibold mt-1">{label}</span>
  </div>
);

// Componente principal de cronômetro
export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeRemaining(targetDate);
      if (updated.total <= 0) clearInterval(timer);
      setTimeLeft(updated);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-8 p-20 ">
      <CountdownBox value={timeLeft.days} label="DIAS" />
      <CountdownBox value={timeLeft.hours} label="HORAS" />
      <CountdownBox value={timeLeft.minutes} label="MIN" />
      <CountdownBox value={timeLeft.seconds} label="SEG" />
    </div>
  );
}
