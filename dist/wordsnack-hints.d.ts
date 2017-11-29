declare module "wordsnack-hints" {
    export function hints(letters: string, wordlength: number, callback: (word: string | null) => void): void;
}
