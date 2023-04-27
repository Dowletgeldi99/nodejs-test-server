import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Types } from 'mongoose';
import { User, UserDocument } from '../../providers/db/models/user.model';
import { SignUpDto } from '../../authentication/dto/sign-up.dto';
import { UserEntity } from '../../common/entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getOneUserByFilter(filter: object): Promise<User> {
    return await this.userModel.findOne(filter).exec();
  }

  async addUserCar(
    id: Types.ObjectId,
    carId: Types.ObjectId,
  ): Promise<UserEntity> {
    return this.userModel.findByIdAndUpdate(
      id,
      {
        $addToSet: {
          cars: carId,
        },
      },
      { new: true },
    );
  }

  async deleteUserCar(
    id: Types.ObjectId,
    carId: Types.ObjectId,
  ): Promise<UserEntity> {
    return this.userModel.findByIdAndUpdate(
      id,
      {
        $pull: {
          cars: carId,
        },
      },
      { new: true },
    );
  }

  async putNewPassword(id: ObjectId, password: string): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      id,
      {
        password,
      },
      { new: true },
    );
  }

  async getUsersByFilter(filter: object): Promise<User[]> {
    return await this.userModel.find(filter).exec();
  }

  async createNewUser(user: SignUpDto): Promise<User> {
    return await this.userModel.create(user).then((user) =>
      user.populate([
        // {
        //   path: 'role',
        // },
        // {
        //   path: 'home_airport',
        // },
        // {
        //   path: 'posts',
        //   model: 'Post',
        //   populate: [{ path: 'creator', model: 'User' }],
        // },
      ]),
    );
  }
}
