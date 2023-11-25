import { Progress } from "antd";

export type TPomodoroProgressProps = {
  secondsLeft: number;
  totalSeconds: number;
};

const PomodoroProgress = (props: TPomodoroProgressProps) => {
  return (
    <div className="flex justify-center">
      <Progress
        strokeColor="#2563EB"
        type="circle"
        size="default"
        percent={(props.secondsLeft / props.totalSeconds) * 100}
        format={() => (
          <div>
            <span>
              {Math.floor(props.secondsLeft / 60)}:{props.secondsLeft % 60}
            </span>
          </div>
        )}
      />
    </div>
  );
};

export default PomodoroProgress;
