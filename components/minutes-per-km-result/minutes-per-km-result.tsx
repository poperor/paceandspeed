import { ResultProps, toMinutesPerKm } from "../../lib/conversion";
import styles from "./minutes-per-km-result.module.css";

export const MinutesPerKmResult = ({ cannonicalKph }: ResultProps) => {
  const minutesPerKm = toMinutesPerKm(cannonicalKph);
  return (
    <div>
      {minutesPerKm && (
        <div>
          {minutesPerKm.min > 0 && <span>{minutesPerKm.min} minutes </span>}
          {minutesPerKm.sec > 0 && <span>{minutesPerKm.sec} seconds</span>}{" "}
          <span>per kilometer </span>
        </div>
      )}
    </div>
  );
};
