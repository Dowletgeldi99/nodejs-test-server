import { Types } from 'mongoose';
import { UserEntity } from '../../common/entities/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { errors } from '../../common/helpers/responses/error.helper';
import { SignUpDto } from '../../authentication/dto/sign-up.dto';
import { AuthenticationProvider } from '../../authentication/auth.provider';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getUserByEmail(email: string): Promise<UserEntity> {
    return await this.usersRepository.getOneUserByFilter({ email });
  }

  async getUserById(id: string): Promise<UserEntity> {
    return await this.usersRepository.getOneUserByFilter({
      _id: new Types.ObjectId(id),
    });
  }

  async addUserCar(
    id: Types.ObjectId,
    carId: Types.ObjectId,
  ): Promise<UserEntity> {
    return await this.usersRepository.addUserCar(id, carId);
  }

  async deleteUserCar(
    id: Types.ObjectId,
    carId: Types.ObjectId,
  ): Promise<UserEntity> {
    return await this.usersRepository.deleteUserCar(id, carId);
  }

  async create(body: SignUpDto) {
    const userExist = await this.usersRepository.getOneUserByFilter({
      email: body.email,
    });
    if (userExist)
      throw new HttpException(errors.USER_EXIST, HttpStatus.BAD_REQUEST);

    const userData = await this.createUserData(body);

    return await this.usersRepository.createNewUser(userData);
  }

  async createUserData(signUpDto: SignUpDto): Promise<SignUpDto> {
    const hashedPassword = await AuthenticationProvider.generateHash(
      signUpDto.password,
    );

    return {
      ...signUpDto,
      password: hashedPassword,
    };
  }
}
