import { expect } from "chai";

export interface ISample {
    title?: string;
    expectation: any;
    [name: string]: any;
}

export function withProvider(samples: ISample[], itFn: (sample: ISample) => void) {
    samples.filter((sample) => typeof (sample as any).title !== "undefined").forEach(itFn);
}

export { expect } from "chai";
