import { useState } from "react";
import {
  fromMinutesPerKm,
  MinutesPerKm,
  SourceProps,
  toMinutesPerKm,
} from "../../lib/conversion";

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
    <fieldset>
      <legend>Minutes per kilometer</legend>
      <div>
        min <input type="number" onChange={onMinChange} />
        sec <input type="number" onChange={onSecChange} />
      </div>
    </fieldset>
  );
};
