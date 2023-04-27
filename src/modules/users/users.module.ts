import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './users.repository';
import { IsUserAlreadyExist } from './UserExists';
import { User, UserSchema } from '../../providers/db/models/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, IsUserAlreadyExist],
  exports: [UsersService, IsUserAlreadyExist],
})
export class UsersModule {}
