export declare class AuthenticationProvider {
    static generateHash(password: string): Promise<string>;
    static checkPassword(plainPassword: string, password: string): Promise<boolean>;
}
