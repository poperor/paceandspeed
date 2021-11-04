import { useState } from "react";
import {
  fromMinutesPerKm,
  MinutesPerKm,
  SourceProps
} from "../../lib/conversion";
import styles from './minutes-per-km-source.module.css'

export const MinutesPerKmSource = ({ setCannonicalKph }: SourceProps) => {
  const [mintuesPerKm, setMinutesPerKm] = useState<MinutesPerKm>({
    min: 0,
    sec: 0,
  });

  const onMinChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const min = event.currentTarget.valueAsNumber;
    const newMinPerKm = { ...mintuesPerKm, min };
    setMinutesPerKm(newMinPerKm);
    setCannonicalKph(fromMinutesPerKm(newMinPerKm));
  };

  const onSecChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const sec = event.currentTarget.valueAsNumber;
    const newMinPerKm = { ...mintuesPerKm, sec };
    setMinutesPerKm(newMinPerKm);
    setCannonicalKph(fromMinutesPerKm(newMinPerKm));
  };

  return (
    <div>
      <input className={styles.timeinput} type="number" onChange={onMinChange} placeholder="minutes" />{" "}
      minutes{" "}
      <input className={styles.timeinput} type="number" onChange={onSecChange} placeholder="seconds" />{" "}
      seconds
    </div>
  );
};
