import { Dictionnaries } from "../enum/storage";

export type Key = string;
export type Expire = Dictionnaries.permanent | number;

export interface Data<T> {
    value: T;
    [Dictionnaries.expire]: Expire;
}

export interface Result<T> {
    value: T | null;
    msg: string;
}

export interface StorageCls {
    clear(): void;
    set<T>(key: Key, value: T, expire?: Expire): void;
    get(key: Key): void;
    remove(key: Key): void;
}
