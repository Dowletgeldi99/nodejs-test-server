import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Car } from './car.model';
import { Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @ApiProperty()
  @Prop({ unique: true })
  email: string;

  @ApiProperty()
  @Prop()
  password: string;

  @ApiProperty()
  @Prop({
    type: [{ type: MongooseSchema.Types.ObjectId, ref: Car.name }],
  })
  cars: Car[];
}

export const UserSchema = SchemaFactory.createForClass(User);
