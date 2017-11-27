import * as wordsnack from "./lib/wordsnack";

const letters = "пекрнаа";
const wordLength = 7;

wordsnack.hints(letters, wordLength, (word) => {
    if (word != null) {
        // tslint:disable-next-line:no-console
        console.log(word);
    }
});
