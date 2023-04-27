"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationProvider = void 0;
const bcrypt_1 = require("bcrypt");
class AuthenticationProvider {
    static async generateHash(password) {
        const saltOrRounds = 10;
        return await (0, bcrypt_1.hash)(password, saltOrRounds);
    }
    static async checkPassword(plainPassword, password) {
        return await (0, bcrypt_1.compare)(plainPassword, password);
    }
}
exports.AuthenticationProvider = AuthenticationProvider;
//# sourceMappingURL=auth.provider.js.map