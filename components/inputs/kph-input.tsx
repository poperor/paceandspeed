import { useState, useContext } from "react";
import styles from "./input.module.css";
import utilityStyles from '../../styles/utility.module.css'
import { toKph } from "../../lib/conversion";
import { CannonicalKph } from "../../context/canonical-kph";

export const KphInput = () => {
  const { cannonicalKph, setCannonicalKph } = useContext(CannonicalKph);
  const [kph, setKph] = useState(toKph(cannonicalKph));
  
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
