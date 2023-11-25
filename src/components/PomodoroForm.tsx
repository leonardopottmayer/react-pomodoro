export type TPomodoroFormProps = {
  totalInitialSeconds: number;
  choosenMinutes: number;
  choosenSeconds: number;
  isRunning: boolean;
  setChoosenMinutes: (minutes: number) => void;
  setChoosenSeconds: (seconds: number) => void;
  setIsRunning: (isRunning: boolean) => void;
  startCountdown: (seconds: number) => void;
  stopCountdown: () => void;
  setTotalInitialSeconds: (seconds: number) => void;
};

const PomodoroForm = (props: TPomodoroFormProps) => {
  const handleStartButtonClick = () => {
    const totalSeconds =
      props.choosenSeconds +
      (props.choosenMinutes > 0 ? props.choosenMinutes * 60 : 0);

    if (totalSeconds <= 0) return;

    props.setTotalInitialSeconds(totalSeconds);
    props.startCountdown(totalSeconds);
    props.setIsRunning(true);
  };

  const handleStopButtonClick = () => {
    props.setIsRunning(false);
    props.stopCountdown();
  };

  return (
    <div className="flex gap-2 flex-col">
      <div>
        <input
          placeholder="Minutes"
          className="w-full border-2 text-center"
          min={0}
          type="number"
          value={props.choosenMinutes}
          onChange={(e) => props.setChoosenMinutes(parseInt(e.target.value))}
        />
      </div>
      <div>
        <input
          placeholder="Seconds"
          className="w-full border-2 text-center"
          min={0}
          max={59}
          type="number"
          value={props.choosenSeconds}
          onChange={(e) => props.setChoosenSeconds(parseInt(e.target.value))}
        />
      </div>
      <div className="flex">
        <button
          className="bg-gray-200 text-black pt-1 pr-4 pb-1 pl-4 w-1/2 hover:bg-gray-300 cursor-pointer rounded-sm"
          onClick={handleStopButtonClick}
          disabled={!props.isRunning}
        >
          Stop
        </button>
        <button
          className="bg-blue-600 text-white pt-1 pr-4 pb-1 pl-4 w-1/2 hover:bg-blue-500 cursor-pointer rounded-sm"
          disabled={props.isRunning}
          onClick={handleStartButtonClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default PomodoroForm;
