import { ResultProps, toMinutesPerKm } from "../../lib/conversion";
import resultStyles from "./result.module.css";
import utilityStyles from '../../styles/utility.module.css'



export const MinutesPerKmResult = ({ cannonicalKph }: ResultProps) => {
  const minutesPerKm = toMinutesPerKm(cannonicalKph);
  return (
    <div>
      {minutesPerKm && (
        <div className={`${utilityStyles.verticalAlign} ${resultStyles.result}`}>
          {minutesPerKm.min > 0 && <span>{minutesPerKm.min}</span>}:
          {minutesPerKm.sec > 0 && <span>{minutesPerKm.sec >= 10 ? minutesPerKm.sec : "0" + minutesPerKm.sec} </span>}
        </div>
      )}
    </div>
  );
};
