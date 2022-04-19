export type fieldProps = {
  x: number;
  y: number;
  suspected: boolean;
  mine: boolean;
  value?: string;
};

export type sweeperProps = {
  fieldSize: number;
  mineCount: number;
  counter: number;
  suspectedCounter: number;
  helpText: string;
  isConntected: boolean;
  fieldMap: fieldProps[][];
};
