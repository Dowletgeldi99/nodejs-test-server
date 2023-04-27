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
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_model_1 = require("../../providers/db/models/user.model");
let UsersRepository = class UsersRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async getOneUserByFilter(filter) {
        return await this.userModel.findOne(filter).exec();
    }
    async addUserCar(id, carId) {
        return this.userModel.findByIdAndUpdate(id, {
            $addToSet: {
                cars: carId,
            },
        }, { new: true });
    }
    async deleteUserCar(id, carId) {
        return this.userModel.findByIdAndUpdate(id, {
            $pull: {
                cars: carId,
            },
        }, { new: true });
    }
    async putNewPassword(id, password) {
        return this.userModel.findByIdAndUpdate(id, {
            password,
        }, { new: true });
    }
    async getUsersByFilter(filter) {
        return await this.userModel.find(filter).exec();
    }
    async createNewUser(user) {
        return await this.userModel.create(user).then((user) => user.populate([]));
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map