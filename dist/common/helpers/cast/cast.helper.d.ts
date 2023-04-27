interface ToNumberOptions {
    default?: number;
    min?: number;
    max?: number;
}
export declare function toLowerCase(value: string): string;
export declare function trim(value: string): string;
export declare function toDate(value: string): Date;
export declare function toBoolean(value: string): boolean;
export declare function toNumber(value: string, opts?: ToNumberOptions): number;
export {};
