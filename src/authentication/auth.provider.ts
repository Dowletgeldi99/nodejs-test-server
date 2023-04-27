import { hash, compare } from 'bcrypt';

export class AuthenticationProvider {
  static async generateHash(password: string): Promise<string> {
    const saltOrRounds = 10;

    return await hash(password, saltOrRounds);
  }

  static async checkPassword(
    plainPassword: string,
    password: string,
  ): Promise<boolean> {
    return await compare(plainPassword, password);
  }
}
