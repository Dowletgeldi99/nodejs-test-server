"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('Server APP V1')
    .setDescription('Node test Server APP Web Service API - Version 1')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
//# sourceMappingURL=config.js.map