declare const _default: (() => {
    port: string;
    jwtSecret: string;
    jwtExpirationTime: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: string;
    jwtSecret: string;
    jwtExpirationTime: string;
}>;
export default _default;
