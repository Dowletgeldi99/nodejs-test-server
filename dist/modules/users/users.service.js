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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const error_helper_1 = require("../../common/helpers/responses/error.helper");
const auth_provider_1 = require("../../authentication/auth.provider");
const users_repository_1 = require("./users.repository");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUserByEmail(email) {
        return await this.usersRepository.getOneUserByFilter({ email });
    }
    async getUserById(id) {
        return await this.usersRepository.getOneUserByFilter({
            _id: new mongoose_1.Types.ObjectId(id),
        });
    }
    async addUserCar(id, carId) {
        return await this.usersRepository.addUserCar(id, carId);
    }
    async deleteUserCar(id, carId) {
        return await this.usersRepository.deleteUserCar(id, carId);
    }
    async create(body) {
        const userExist = await this.usersRepository.getOneUserByFilter({
            email: body.email,
        });
        if (userExist)
            throw new common_1.HttpException(error_helper_1.errors.USER_EXIST, common_1.HttpStatus.BAD_REQUEST);
        const userData = await this.createUserData(body);
        return await this.usersRepository.createNewUser(userData);
    }
    async createUserData(signUpDto) {
        const hashedPassword = await auth_provider_1.AuthenticationProvider.generateHash(signUpDto.password);
        return Object.assign(Object.assign({}, signUpDto), { password: hashedPassword });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map