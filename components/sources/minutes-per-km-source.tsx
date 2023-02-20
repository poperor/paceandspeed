import { useState } from "react";
import {
  fromMinutesPerKm,
  MinutesPerKm,
  SourceProps
} from "../../lib/conversion";
import styles from './minutes-per-km-source.module.css'
import utilityStyles from '../../styles/utility.module.css'

export const MinutesPerKmSource = ({ setCannonicalKph }: SourceProps) => {
  const [minutesPerKm, setMinutesPerKm] = useState<MinutesPerKm>({
    min: 0,
    sec: 0,
  });

  const onMinChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const min = event.currentTarget.valueAsNumber;
    const newMinPerKm = { ...minutesPerKm, min };
    setMinutesPerKm(newMinPerKm);
    setCannonicalKph(fromMinutesPerKm(newMinPerKm));
  };

  const onSecChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const sec = event.currentTarget.valueAsNumber;
    const newMinPerKm = { ...minutesPerKm, sec };
    setMinutesPerKm(newMinPerKm);
    setCannonicalKph(fromMinutesPerKm(newMinPerKm));
  };

  return (
    <div className={utilityStyles.verticalAlign}> 
      <input className={styles.timeinput} type="number" onChange={onMinChange} placeholder="minutes" />{" "}
      minutes{" "}
      <input className={styles.timeinput} type="number" onChange={onSecChange} placeholder="seconds" />{" "}
      seconds
    </div>
  );
};
