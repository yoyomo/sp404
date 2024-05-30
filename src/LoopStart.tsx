import React, {useMemo, useState} from 'react';
import {getLoopStart} from "./utils";
import {NumberInput} from "./NumberInput";

export const LoopStart = () => {
  const [bpm, setBPM] = useState(90);
  const [sampleLength, setSampleLength] = useState(864000);
  const [numberOfBars, setNumberOfBars] = useState(4);

  const loopStart = useMemo(() =>
      getLoopStart(bpm, sampleLength, numberOfBars)
  , [bpm, sampleLength, numberOfBars]);


  return (
    <div>
      BPM: <NumberInput value={bpm} onUpdate={setBPM} />
      Sample Length: <NumberInput value={sampleLength} onUpdate={setSampleLength} />
      Number of Bars: <NumberInput value={numberOfBars} onUpdate={setNumberOfBars} />

      <div>Loop Start: {loopStart}</div>
    </div>
  );
}
