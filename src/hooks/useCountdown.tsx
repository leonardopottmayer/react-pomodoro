import { useEffect, useState } from "react";

const useCountdown = () => {
  const [secondsLeft, setSecondsLeft] = useState<number>(0);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timeout = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [secondsLeft]);

  const startCountdown = (seconds: number) => {
    setSecondsLeft(seconds);
  };

  const stopCountdown = () => {
    setSecondsLeft(0);
  };

  return { secondsLeft, startCountdown, stopCountdown };
};

export default useCountdown;
