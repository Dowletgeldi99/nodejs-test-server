"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('app', () => ({
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET_KEY,
    jwtExpirationTime: process.env.JWT_EXPIRATION_TIME,
}));
//# sourceMappingURL=configuration.js.map