import permutations from "../src/lib/permutations";
import { expect } from "chai";

describe("permutations", () => {
    it("should generate all permutations of array elements", () => {
        const input = [1, 2, 3];
        const expectation = [
            [1, 2, 3],
            [2, 1, 3],
            [2, 3, 1],
            [1, 3, 2],
            [3, 1, 2],
            [3, 2, 1]
        ];
        const result = [];
        for (const p of permutations(input)) {
            result.push(p);
        }

        expect(result).to.have.same.deep.members(expectation);
    });

    it.only("should not generate a permutation more than once", () => {
        const input = [1, 2, 1];
        const expectation = [
            [1, 2, 1],
            [2, 1, 1],
            // [2, 1, 1],
            [1, 1, 2],
            // [1, 1, 2],
            // [1, 2, 1]
        ];
        const result = [];
        for (const p of permutations(input)) {
            // tslint:disable-next-line:no-console
            console.log(p);
            result.push(p);
        }

        // expect(result).to.have.same.deep.members(expectation);
    });
});
