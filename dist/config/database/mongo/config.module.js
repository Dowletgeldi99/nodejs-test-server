"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConfigModule = void 0;
const config_service_1 = require("./config.service");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const configuration_1 = __importDefault(require("./configuration"));
let DatabaseConfigModule = class DatabaseConfigModule {
};
DatabaseConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
            }),
        ],
        providers: [config_1.ConfigService, config_service_1.DatabaseConfigService],
        exports: [config_1.ConfigService, config_service_1.DatabaseConfigService],
    })
], DatabaseConfigModule);
exports.DatabaseConfigModule = DatabaseConfigModule;
//# sourceMappingURL=config.module.js.map