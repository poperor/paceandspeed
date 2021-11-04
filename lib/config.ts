import { KphResult } from "../components/kph-result/kph-result";
import { KphSource } from "../components/kph-source/kph-source";
import { MinutesPerKmResult } from "../components/minutes-per-km-result/minutes-per-km-result";
import { MinutesPerKmSource } from "../components/minutes-per-km-source/minutes-per-km-source";
import {
  fromKph,
  fromMinutesPerKm,
  ResultProps,
  SourceProps,
  toKph,
  toMinutesPerKm,
} from "./conversion";

export interface SpeedType {
  id: string;
  name: string;
  sourceComponent: ({ setCannonicalKph }: SourceProps) => JSX.Element;
  resultComponent: ({ cannonicalKph }: ResultProps) => JSX.Element;
}

export const speedTypes: SpeedType[] = [
  {
    id: "kph",
    name: "kilometers per hour",
    sourceComponent: KphSource,
    resultComponent: KphResult,
  },
  {
    id: "minutes-per-km",
    name: "minutes per kilometer",
    sourceComponent: MinutesPerKmSource,
    resultComponent: MinutesPerKmResult,
  },
];

export interface Params {
  params: {
    id: string;
  };
}

export const getAllPaths = (): Array<Params> => {
  const paths = speedTypes.flatMap((sourceSpeedType) =>
    speedTypes
      .filter((resultSpeedType) => sourceSpeedType.id !== resultSpeedType.id)
      .map(
        (resultSpeedType) => sourceSpeedType.id + "-to-" + resultSpeedType.id
      )
  );
  const params = paths.map((path) => ({
    params: {
      id: path,
    },
  }));
  return params;
};
