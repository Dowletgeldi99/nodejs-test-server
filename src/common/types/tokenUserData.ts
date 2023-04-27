import { Types } from 'mongoose';

export interface ITokenUserData {
  _id: Types.ObjectId;
  email: string;
}
