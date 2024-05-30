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
    <div className="flex flex-col justify-center items-center text-center gap-y-2">
      <h1 className="text-3xl font-bold m-2"> SP 404 Perfect Loop Start Calculator:</h1>
      BPM: <NumberInput value={bpm} onUpdate={setBPM}/>
      Sample Length: <NumberInput value={sampleLength} onUpdate={setSampleLength}/>
      Number of Bars: <NumberInput value={numberOfBars} onUpdate={setNumberOfBars}/>
      <label>Loop Start:</label>
      <div className="text-lg">{loopStart}</div>
    </div>
  );
}
