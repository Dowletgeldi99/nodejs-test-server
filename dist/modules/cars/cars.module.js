"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const car_model_1 = require("../../providers/db/models/car.model");
const cars_service_1 = require("./cars.service");
const cars_repository_1 = require("./cars.repository");
const cars_controller_1 = require("./cars.controller");
const users_module_1 = require("../users/users.module");
let CarsModule = class CarsModule {
};
CarsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            mongoose_1.MongooseModule.forFeature([{ name: car_model_1.Car.name, schema: car_model_1.CarSchema }]),
        ],
        providers: [cars_service_1.CarsService, cars_repository_1.CarsRepository],
        controllers: [cars_controller_1.CarsController],
    })
], CarsModule);
exports.CarsModule = CarsModule;
//# sourceMappingURL=cars.module.js.map