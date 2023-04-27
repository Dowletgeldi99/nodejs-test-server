"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const car_model_1 = require("../../providers/db/models/car.model");
let CarsRepository = class CarsRepository {
    constructor(carModel) {
        this.carModel = carModel;
    }
    async create(carData) {
        return await this.carModel.create(carData);
    }
    async getById(id) {
        return await this.carModel.findById(new mongoose_1.Types.ObjectId(id)).lean().exec();
    }
    async getAll() {
        return await this.carModel.find().lean().sort({ brand: 1 }).exec();
    }
    async update(id, carData) {
        return this.carModel.findByIdAndUpdate(new mongoose_1.Types.ObjectId(id), carData, {
            new: true,
        });
    }
    async delete(id) {
        return this.carModel.findByIdAndDelete(new mongoose_1.Types.ObjectId(id));
    }
};
CarsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(car_model_1.Car.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CarsRepository);
exports.CarsRepository = CarsRepository;
//# sourceMappingURL=cars.repository.js.map