declare module "ChordModule" {
  export type ChordType = {
    frets: number[];
    barres?: number[];
    capo?: boolean;
    fingers?: number[];
    baseFret: number;
  };

  export type InstrumentType = {
    tunings: {
      standard: string[];
    };
    strings: number;
    fretsOnChord: number;
  };

  export type ChordProps = {
    chord: any;
    instrument: InstrumentType;
    lite?: boolean;
  };
}
