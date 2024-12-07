import { Models } from "appwrite";

export type User = Models.User<Models.Preferences> & {
  email?: string;
  usernames?: string;
  password?: string;
  phone?: string;
  userId?: string;
  documentId:string,
};

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (username:string,email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  loginWithPhone: (phoneNumber: string) => Promise<string>;
  verifyOTP: (userId: string, otp: string) => Promise<Models.Session>;
}
