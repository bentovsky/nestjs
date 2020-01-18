export interface IUser {
  name: string,
  age: Number,
}

export interface ICreateUserDto {
  name: IUser['name'];
  age: IUser['age'];
}