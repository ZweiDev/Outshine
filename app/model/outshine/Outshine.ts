export default interface Outshine {
    enabled: boolean;
    location: Location | null;
    actions: Actions | null;
    reason: Reason | null;
}

export interface Location {
    latitude: number;
    longitude: number;
}

export interface Actions {
    enableCallButtons: boolean;
    enableSOSMode: boolean;
    enableLoudAlert: boolean;
    enableOutshineBoard: boolean;
}

export interface Reason {
    title: string;
    desc: string;
}
