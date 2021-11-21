import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { getAllPaths, Params, SpeedType, speedTypes } from "../lib/config";
import styles from "./[id].module.css"
import {upperCaseFirst} from "upper-case-first"

interface Props {
  id: string;
}

const Conversion: NextPage<Props> = ({ id }) => {
  const [cannonicalKph, setCannonicalKph] = useState(0);

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
  const title = upperCaseFirst(`${sourceType.name} to ${resultType.name}`)
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
      </Head>
    <div>
      <h1>
        {title}
      </h1>
      <fieldset className={styles.sourceContainer}>
        <legend className={styles.boxLegend}>{upperCaseFirst(sourceType.name)}</legend>
        {sourceType.sourceComponent({ setCannonicalKph })}
      </fieldset>
      <fieldset className={styles.resultContainer}>
        <legend>{upperCaseFirst(resultType.name)}</legend>
        {resultType.resultComponent({ cannonicalKph })}
      </fieldset>
    </div>
    </>
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
