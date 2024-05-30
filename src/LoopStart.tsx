import { Switch } from '@mantine/core';
import { useMemo, useState } from 'react';
import { NumberInput } from "./NumberInput";
import { getLoopStart, getMaxBars } from "./utils";

export const LoopStart = () => {
  const [bpm, setBPM] = useState(90);
  const [sampleLength, setSampleLength] = useState(864000);
  const [numberOfBars, setNumberOfBars] = useState(4);

  const [sampleLengthMode, setSampleLengthMode] = useState(true);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(sampleLength);


  const loopStart = useMemo(() => sampleLengthMode ?
    getLoopStart(bpm, sampleLength, numberOfBars) :
    getLoopStart(bpm, endPoint - startPoint, numberOfBars) + startPoint
    , [bpm, sampleLength, numberOfBars, sampleLengthMode, startPoint, endPoint]);

  const maxBars = useMemo(() => sampleLengthMode ?
    getMaxBars(bpm, sampleLength)
    : getMaxBars(bpm, endPoint - startPoint)
    , [bpm, sampleLength, sampleLengthMode, startPoint, endPoint]);

  return (
    <div className="flex flex-row bg-gray-100 justify-center h-screen">
      <div className="flex flex-col items-center text-center gap-y-2">
        <h1 className="text-3xl font-bold m-2"> SP 404 Perfect Loop Start Calculator:</h1>
        <NumberInput defaultValue={bpm} onUpdate={setBPM} label="BPM:" />

        {sampleLengthMode ?
          <NumberInput defaultValue={sampleLength} onUpdate={setSampleLength} label="Sample Length:" />
          : <div>
            <NumberInput defaultValue={startPoint} onUpdate={setStartPoint} label="Start:" />
            <NumberInput defaultValue={endPoint} onUpdate={setEndPoint} label="End:" />
          </div>
        }

        <NumberInput defaultValue={numberOfBars} onUpdate={setNumberOfBars} max={maxBars} label={`Number of Bars (max. ${maxBars}):`} />
        <label>Loop Start:</label>
        <div className="text-lg">{loopStart}</div>
      </div>
      <Switch className="absolute bottom-0 left-0" size="lg" onLabel="Sample Length" offLabel="Start/End" color="orange" checked={sampleLengthMode}
        onChange={(event) => setSampleLengthMode(event.currentTarget.checked)} />
    </div>
  );
}
