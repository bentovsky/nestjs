import { Document } from "mongoose";

export interface IUser extends Document {
  readonly name: string,
  readonly age: Number,
}

export interface ICreateUserDto {
  name: IUser['name'];
  age: IUser['age'];
}