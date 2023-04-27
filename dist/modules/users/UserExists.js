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
exports.IsUserAlreadyExist = void 0;
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const util_1 = require("util");
let IsUserAlreadyExist = class IsUserAlreadyExist {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async validate(email) {
        const user = await this.usersService.getUserByEmail(email);
        return (0, util_1.isNullOrUndefined)(user);
    }
    defaultMessage() {
        return 'The email «$value» is already register.';
    }
};
IsUserAlreadyExist = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isUserAlreadyExist', async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], IsUserAlreadyExist);
exports.IsUserAlreadyExist = IsUserAlreadyExist;
//# sourceMappingURL=UserExists.js.map