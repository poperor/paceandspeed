import { ResultProps } from "../../lib/conversion";

export const KphResult = ({ cannonicalKph }: ResultProps) => {
  return (
    <div>
      {cannonicalKph > 0 && <div>{cannonicalKph} kilometer per hour</div>}
    </div>
  );
};
