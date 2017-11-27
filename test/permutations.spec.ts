import permutations from "../src/lib/permutations";
import { slide } from "../src/lib/permutations";
import { expect, withProvider, ISample } from "./setup";

describe("permutations", () => {
    const samples: ISample[] = [{
        title: "one element",
        input: [1],
        expectation: [
            [1]
        ],
    }, {
        title: "two unique elements",
        input: [1, 2],
        expectation: [
            [1, 2],
            [2, 1]
        ]
    }, {
        title: "two equal elements",
        input: [1, 1],
        expectation: [
            [1, 1]
        ]
    }, {
        title: "3 unique elements",
        input: [1, 2, 3],
        expectation: [
            [1, 2, 3],
            [2, 1, 3],
            [2, 3, 1],
            [1, 3, 2],
            [3, 1, 2],
            [3, 2, 1]
        ]
    }, {
        title: "repeating elements",
        input: [1, 1, 2],
        expectation: [
            [1, 2, 1],
            [2, 1, 1],
            [1, 1, 2]
        ]
    }, {
        title: "another repeating elements",
        input: [1, 2, 1, 2],
        expectation: [
            [1, 2, 1, 2],
            [2, 1, 1, 2],
            [1, 1, 2, 2],
            [2, 1, 2, 1],
            [1, 2, 2, 1],
            [2, 2, 1, 1],
        ]
    }, {
        title: "another repeating elements (1)",
        input: [1, 2, 3, 1],
        expectation: [
            [1, 2, 3, 1],
            [1, 3, 2, 1],
            [2, 3, 1, 1],
            [3, 2, 1, 1],
            [1, 1, 2, 3],
            [1, 1, 3, 2],
            [2, 1, 1, 3],
            [3, 1, 1, 2],
            [1, 2, 1, 3],
            [1, 3, 1, 2],
            [2, 1, 3, 1],
            [3, 1, 2, 1],
        ]
    }];

    withProvider(samples, (sample) => {
        it(`should generate all permutations of array elements: ${sample.title}`, () => {
            const result = [];
            for (const p of permutations(sample.input)) {
                result.push(p);
            }

            expect(result).to.have.same.deep.members(sample.expectation);
        });
    });

    it("should be reasonably fast", () => {
        const input = "пекрнаа";
        const expectations = [
            "пекарна",
            "перкана"
        ];
        let foundCount = 0;
        for (const p of permutations(input.split(""))) {
            if (expectations.indexOf(p.join("")) >= 0) {
                foundCount++;
            }
        }

        expect(foundCount).to.be.equal(expectations.length);
    });
});

describe("slide", () => {
    const samples: ISample[] = [{
        title: "one element",
        input: [3],
        item: 2,
        expectation: [
            [2, 3],
            [3, 2],
        ]
    }, {
        title: "unique elements",
        input: [1, 2, 3],
        item: 4,
        expectation: [
            [4, 1, 2, 3],
            [1, 4, 2, 3],
            [1, 2, 4, 3],
            [1, 2, 3, 4]
        ]
    }, {
        title: "existing elements",
        input: [1, 2, 3],
        item: 3,
        expectation: [
            [3, 1, 2, 3],
            [1, 3, 2, 3],
            [1, 2, 3, 3]
        ]
    }, {
        title: "same elements",
        input: [1, 1, 1],
        item: 1,
        expectation: [
            [1, 1, 1, 1]
        ]
    }, {
        title: "repeating elements",
        input: [1, 2, 1],
        item: 1,
        expectation: [
            [1, 1, 2, 1],
        ]
    }];

    withProvider(samples, (sample) => {
        it(`should insert new element in every position: ${sample.title}`, () => {
            const result = [];
            for (const i of slide(sample.item, sample.input)) {
                result.push(i);
            }

            expect(result).to.have.same.deep.members(sample.expectation);

        });
    });
});
