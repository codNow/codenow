
import { Models } from 'appwrite';
import { UserContextType } from './UserContextTypes';
import { Context, createContext } from 'react';

// Create context with initial default value and proper typing
const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {},
  login: async () => {},
  logout: async () => {},
  register: async () => {},
  loginWithGoogle: async () => {},
  loginWithPhone: async () => "",
  verifyOTP: async () => ({} as Models.Session),
};

export const UserContext: Context<UserContextType> = createContext<UserContextType>(defaultUserContext);