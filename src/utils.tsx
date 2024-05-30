const DEFAULT_ONE_BAR_LENGTH = 96000
const DEFAULT_BPM = 120
const DEFAULT_ONE_BAR_PER_BPM = DEFAULT_ONE_BAR_LENGTH * DEFAULT_BPM;

export const getMaxBars = (bpm: number, sampleLength: number) => {
    const oneBarLength = DEFAULT_ONE_BAR_PER_BPM / bpm;
    return Math.floor(sampleLength / oneBarLength);
}

export const getLoopStart = (bpm: number, sampleLength: number, numberOfBars: number ) => {
    const oneBarLength = DEFAULT_ONE_BAR_PER_BPM / bpm;
    const loopBarsLength = oneBarLength * numberOfBars;
    const loopStart = sampleLength - loopBarsLength;

    return Math.round(loopStart);
}
