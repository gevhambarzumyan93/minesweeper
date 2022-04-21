export type TFieldProps = {
  x: number;
  y: number;
  suspected: boolean;
  mine: boolean;
  value?: string;
};

export type TSweeperProps = {
  fieldSize: number;
  mineCount: number;
  counter: number;
  suspectedCounter: number;
  helpText: string;
  isConntected: boolean;
  isWined: boolean;
  isGameOver: boolean;
  fieldMap: TFieldProps[][];
};
