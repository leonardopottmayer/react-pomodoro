import { useEffect, useState } from "react";
import PomodoroForm from "./PomodoroForm";
import PomodoroProgress from "./PomodoroProgress";
import useCountdown from "../hooks/useCountdown";

const PomodoroContainer = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [choosenMinutes, setChoosenMinutes] = useState<number>(0);
  const [choosenSeconds, setChoosenSeconds] = useState<number>(0);
  const [totalInitialSeconds, setTotalInitialSeconds] = useState<number>(0);

  const { secondsLeft, startCountdown, stopCountdown } = useCountdown();

  useEffect(() => {
    if (secondsLeft == 0) {
      stopCountdown();
      setIsRunning(false);
    }
  }, [secondsLeft]);

  return (
    <div className="flex flex-col gap-2 p-8 bg-gray-50 rounded-sm">
      <PomodoroProgress
        secondsLeft={secondsLeft}
        totalSeconds={totalInitialSeconds}
      />
      <PomodoroForm
        choosenMinutes={choosenMinutes}
        choosenSeconds={choosenSeconds}
        isRunning={isRunning}
        totalInitialSeconds={totalInitialSeconds}
        setChoosenMinutes={setChoosenMinutes}
        setChoosenSeconds={setChoosenSeconds}
        setIsRunning={setIsRunning}
        startCountdown={startCountdown}
        stopCountdown={stopCountdown}
        setTotalInitialSeconds={setTotalInitialSeconds}
      />
    </div>
  );
};

export default PomodoroContainer;
