import { hints } from "wordsnack-hints";

(() => {
    const dom = {
        loading: document.querySelector<HTMLElement>("div#loading"),
        letters: document.querySelector<HTMLInputElement>("input[name=letters]"),
        wordLength: document.querySelector<HTMLInputElement>("input[name=wordLength]"),
        results: document.querySelector("ol#hints"),
        button: document.querySelector("button#hints")
    };

    if (dom.loading == null || dom.letters == null || dom.wordLength == null || dom.results == null) {
        throw new Error("Invalid DOM");
    }

    function setLoading(state: boolean) {
        if (state) {
            clearHints();
        }
        dom.loading!.style.visibility = state ? "" : "none";
    }

    function clearHints() {
        while (dom.results!.lastChild) {
            dom.results!.removeChild(dom.results!.lastChild!);
        }
    }

    function addHint(word: string): void {
        const li = document.createElement("li");
        li.innerText = word;
        dom.results!.appendChild(li);
    }

    dom.button!.addEventListener("click", () => {
        clearHints();
        setLoading(true);
        hints(dom.letters!.value, +dom.wordLength!.value, (word: string | null) => {
            setLoading(false);
            if (word === null) {
                return;
            }
            addHint(word);
        });
    });
})();
