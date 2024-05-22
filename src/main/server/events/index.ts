import * as alt from 'alt-server';
import { Account } from '@Shared/types/account.js';
import { Character } from '@Shared/types/character.js';
import { Vehicle } from '@Shared/types/vehicle.js';

type RebarEvents = {
    'account-bound': (player: alt.Player, document: Account) => void;
    'character-bound': (player: alt.Player, document: Character) => void;
    'vehicle-bound': (vehicle: alt.Vehicle, document: Vehicle) => void;
    message: (player: alt.Player, message: string) => void;
};

type EventCallbacks<K extends keyof RebarEvents> = { [key in K]: RebarEvents[K][] };

const eventCallbacks: EventCallbacks<keyof RebarEvents> = {
    'account-bound': [],
    'character-bound': [],
    'vehicle-bound': [],
    message: [],
};

export function useEvents() {
    function on<K extends keyof RebarEvents>(event: K, callback: RebarEvents[K]) {
        eventCallbacks[event].push(callback);
    }

    function invoke<K extends keyof RebarEvents>(event: K, ...args: Parameters<RebarEvents[K]>) {
        for (let cb of eventCallbacks[event]) {
            // Normally I would not do this but I know this works, and TypeScript is being a jerk.
            // @ts-ignore
            cb(...args);
        }
    }

    return {
        invoke,
        on,
    };
}
