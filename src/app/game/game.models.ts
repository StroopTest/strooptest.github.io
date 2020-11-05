export interface KeyPress {
    i: number;
    key: string;
}

export interface Word {
    name: string;
    color: string;
    key: string;
}

export interface Result {
    correct: number;
    wrong: number;
}
