import { useState } from "react";
import { SourceProps } from "../../lib/conversion";
import styles from "./kph-source.module.css";
import utilityStyles from '../../styles/utility.module.css'

export const KphSource = ({ setCannonicalKph }: SourceProps) => {
  const [kph, setKph] = useState(0);

  const onChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const kph = event.currentTarget.valueAsNumber;
    setKph(kph);
    setCannonicalKph(kph);
  };

  return (
    <div className={utilityStyles.verticalAlign}>
      <input type="number" value={kph || ""} onChange={onChange} />
    </div>
  );
};
