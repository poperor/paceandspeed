import { ResultProps } from "../../lib/conversion";
import utilityStyles from '../../styles/utility.module.css'

export const KphResult = ({ cannonicalKph }: ResultProps) => {
  return (
    <div className={utilityStyles.verticalAlign}>
      {cannonicalKph > 0 && <div>{cannonicalKph.toFixed(1)}</div>}
    </div>
  );
};
