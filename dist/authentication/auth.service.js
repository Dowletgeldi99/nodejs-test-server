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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_provider_1 = require("./auth.provider");
const users_service_1 = require("../modules/users/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async login(signInDto) {
        const user = await this.usersService.getUserByEmail(signInDto.email);
        if (!user)
            throw new common_1.UnauthorizedException('The Email is incorrect.');
        if (!(await auth_provider_1.AuthenticationProvider.checkPassword(signInDto.password, user.password))) {
            throw new common_1.UnauthorizedException('The password is incorrect.');
        }
        return this.transformUserResponse(user);
    }
    async register(signUpDto) {
        const user = await this.usersService.create(signUpDto);
        return this.transformUserResponse(user);
    }
    async verifyPayload(payload) {
        let user;
        try {
            user = await this.usersService.getUserByEmail(payload.sub);
        }
        catch (error) {
            throw new common_1.UnauthorizedException(`There isn't any user with email: ${payload.sub}`);
        }
        return this.transformUserResponse(user);
    }
    signToken(email) {
        const payload = {
            sub: email,
        };
        return this.jwtService.sign(payload);
    }
    transformUserResponse(user) {
        const newUser = Object.assign({}, user)._doc;
        delete newUser.password;
        return newUser;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map