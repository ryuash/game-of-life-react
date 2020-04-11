import { IUser } from '@interfaces/usersTypes';

export interface IShape {
  user: IUser
};

export interface ISingleShape {
  handleSetShape: Function;
}
