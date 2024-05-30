import { useMemo, useState } from 'react';
import { NumberInput } from "./NumberInput";
import { getLoopStart, getMaxBars } from "./utils";

export const LoopStart = () => {
  const [bpm, setBPM] = useState(90);
  const [sampleLength, setSampleLength] = useState(864000);
  const [numberOfBars, setNumberOfBars] = useState(4);

  const loopStart = useMemo(() =>
    getLoopStart(bpm, sampleLength, numberOfBars)
    , [bpm, sampleLength, numberOfBars]);

  const maxBars = useMemo(() =>
    getMaxBars(bpm, sampleLength)
    , [bpm, sampleLength]);

  return (
    <div className="flex flex-col justify-center items-center text-center gap-y-2 bg-gray-100">
      <h1 className="text-3xl font-bold m-2"> SP 404 Perfect Loop Start Calculator:</h1>
      BPM: <NumberInput defaultValue={bpm} onUpdate={setBPM} />
      Sample Length: <NumberInput defaultValue={sampleLength} onUpdate={setSampleLength} />
      Number of Bars (max. {maxBars}): <NumberInput defaultValue={numberOfBars} onUpdate={setNumberOfBars} max={maxBars} />
      <label>Loop Start:</label>
      <div className="text-lg">{loopStart}</div>
    </div>
  );
}
