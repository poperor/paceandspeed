import { useState } from "react";
import { InputProps } from "../../lib/conversion";
import styles from "./input.module.css";
import utilityStyles from '../../styles/utility.module.css'

export const KphInput = ({ setCannonicalKph }: InputProps) => {
  const [kph, setKph] = useState(0);

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const kph = event.currentTarget.valueAsNumber;
    setKph(kph);
    setCannonicalKph(kph);
  };

  return (
    <div className={utilityStyles.verticalAlign}>
      <input className={styles.speedinput} type="number" value={kph || ""} onChange={onChange} />
    </div>
  );
};
