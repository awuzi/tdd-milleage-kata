export interface Training {
  id: string;
  core: CoreTraining;
  comment: string;
  day: Date;
}

type CoreTraining = MileageCoreTraining | MileageAndSpeedCoreTraining;

export interface MileageAndSpeedCoreTraining {
  mileage: Mileage;
  speed: Speed;
}

export interface MileageCoreTraining {
  mileage: Mileage;
}

interface Metric {
  value: number;
  unit: string;
  type: string;
}

export interface Mileage extends Metric {
  type: "MILEAGE";
  unit: "m" | "km";
}

export interface Speed extends Metric {
  type: "SPEED";
  unit: "km/h";
}

type IdGenerator = () => string;

export function createTraining(
  idGenerator: IdGenerator,
  core: CoreTraining,
  day: Date,
  comment: string
): Training {
  return {
    id: idGenerator(),
    core,
    day,
    comment
  };
}
