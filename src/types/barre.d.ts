declare module "BarreModule" {
  export type BarreType = {
    frets: [];
    barre: number;
    capo: boolean;
    lite: boolean;
    finger: 0 | 1 | 2 | 3 | 4 | 5;
  };

  export type FretXPositionType = {
    [key: number]: number[];
  };

  export type OffsetType = {
    [key: number]: number;
  };
}
