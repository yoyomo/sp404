import React, {useMemo, useState} from 'react';
import {NumberInput} from "@mantine/core";
import {getLoopStart} from "./utils";

function App() {
  const [bpm, setBPM] = useState(90);
  const [sampleLength, setSampleLength] = useState(864000);
  const [numberOfBars, setNumberOfBars] = useState(4);

  const loopStart = useMemo(() =>
      getLoopStart(bpm, sampleLength, numberOfBars)
  , [bpm, sampleLength, numberOfBars]);


  return (
    <div>
      <NumberInput value={bpm} onChange={(v) => setBPM(+v)} />
      <NumberInput value={sampleLength} onChange={(v) => setSampleLength(+v)} />
      <NumberInput value={numberOfBars} onChange={(v) => setNumberOfBars(+v)} />

      <div>Loop Start: {loopStart}</div>
    </div>
  );
}

export default App;
