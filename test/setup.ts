import { expect } from "chai";

export interface ISample {
    title?: string;
    expectation: any;
    [name: string]: any;
}

// tslint:disable-next-line:ban-types
export function withProvider(samples: ISample[], itFn: (sample: ISample) => void) {
    samples.forEach(itFn);
}

export { expect } from "chai";
