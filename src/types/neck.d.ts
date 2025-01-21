declare module "NeckModules" {
  export type Offsets = {
    [key: number]: {
      x: number;
      y: number;
      length: number;
    };
  };

  // Define props for the Neck component
  export interface NeckProps {
    tuning: string[];
    frets: number[];
    capo?: boolean;
    strings: number;
    baseFret?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;
    fretsOnChord: number;
    lite?: boolean;
  }
}
