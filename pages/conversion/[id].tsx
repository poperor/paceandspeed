import { NextPage } from "next";
import { useState } from "react";
import { getAllPaths, Params, SpeedType, speedTypes } from "../../lib/config";

interface Props {
  id: string;
}

const Conversion: NextPage<Props> = ({ id }) => {
  const [cannonicalKph, setCannonicalKph] = useState(0)
  
  const [sourceTypeId, resultTypeId] = id.split("-to-");
  const sourceType = speedTypes.find(
    (speedType) => speedType.id === sourceTypeId
  );
  const resultType = speedTypes.find(
    (speedType) => speedType.id === resultTypeId
  );
  if (!sourceType || !resultType) {
    return <p>Error</p>;
  }
  return (
    <div>
      {sourceType.sourceComponent({ setCannonicalKph })}
      {resultType.resultComponent({ cannonicalKph })}
    </div>
  );
};

export async function getStaticPaths() {
  const paths = getAllPaths();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      id: params.id,
    },
  };
}

export default Conversion;
