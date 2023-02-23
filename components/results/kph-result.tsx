import { ResultProps } from "../../lib/conversion";
import utilityStyles from '../../styles/utility.module.css'
import resultStyles from './result.module.css'

export const KphResult = ({ cannonicalKph }: ResultProps) => {
  return (
    <div className={`${utilityStyles.verticalAlign} ${resultStyles.result}`}>
      {cannonicalKph > 0 && <div>{cannonicalKph.toFixed(1)}</div>}
    </div>
  );
};
