React library for easily generate string instruments SVG chord diagrams based on [@tombatossals/react-chords
](http://github.com/tombatossals/chords-db)

This is direct fork of [@tombatossals/react-chords
](https://github.com/tombatossals/react-chords) which fixes some console errors, support with latest version react and supports typescript.

This Library is being used in [Mye Guitar](https://www.mye-guitar.com/chord-library)

## Installation

### With NPM

```
npm install @techies23/react-chords
```

### With Yarn

```
yarn add @techies23/react-chords
```

## Usage

```js
import React from "react";
import ReactDOM from "react-dom";

import Chord from "@tombatossals/react-chords/lib/Chord";

const MyChord = () => {
  const chord = {
    frets: [1, 3, 3, 2, 1, 1],
    fingers: [1, 3, 4, 2, 1, 1],
    barres: [1],
    capo: false,
  };
  const instrument = {
    strings: 6,
    fretsOnChord: 4,
    name: "Guitar",
    keys: [],
    tunings: {
      standard: ["E", "A", "D", "G", "B", "E"],
    },
  };
  const lite = false; // defaults to false if omitted
  return <Chord chord={chord} instrument={instrument} lite={lite} />;
};

ReactDOM.render(<MyChord />, document.getElementById("root"));
```
