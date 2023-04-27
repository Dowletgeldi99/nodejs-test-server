"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDBModule = void 0;
const connectionParams_1 = require("../../common/helpers/mongo/connectionParams");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_module_1 = require("../../config/database/mongo/config.module");
const config_service_1 = require("../../config/database/mongo/config.service");
let MongoDBModule = class MongoDBModule {
};
MongoDBModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.DatabaseConfigModule,
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_module_1.DatabaseConfigModule],
                inject: [config_service_1.DatabaseConfigService],
                useFactory: (databaseConfigService) => {
                    const options = Object.assign({ uri: databaseConfigService.connectionUrl }, connectionParams_1.connectionParams);
                    return options;
                },
            }),
        ],
    })
], MongoDBModule);
exports.MongoDBModule = MongoDBModule;
//# sourceMappingURL=database.module.js.map