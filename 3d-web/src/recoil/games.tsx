import { atom } from "recoil";

export const gameStageState = atom({
    key: 'gameStageState',
    default: 0,
});

export const upPortalState = atom({
    key: 'upPortalState',
    default: true,
});

export const downPortalState = atom({
    key: 'downPortalState',
    default: true,
});