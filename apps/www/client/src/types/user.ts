export interface User<T = any> {
  id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  profile: T;
  age: number;
}

export interface FindBuddy {
  
}
