"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('mongo', () => ({
    connectionUrl: process.env.MONGO_URL,
}));
//# sourceMappingURL=configuration.js.map