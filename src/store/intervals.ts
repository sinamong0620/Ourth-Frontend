import { atom } from "jotai";

export const refreshIntervalAtom = atom<null | NodeJS.Timer>(null);
