export type UserType = {
    name?: string;
    email: string;
    avatar?: string;
    password: string;
  };

export type UserResponse = {
  user:{
    name: string;
    email: string;
    avatar: string;
  }

  token: string;


}
 export type UserKey = keyof  UserType