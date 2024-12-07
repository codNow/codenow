import React, { useState, useEffect} from 'react';
import { ID, OAuthProvider } from 'appwrite';
import { account } from '@/auth/appwrite';
import { User, UserContextType } from './UserContextTypes';
import { UserContext } from './UserContext';


export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Check for existing session on component mount
    useEffect(() => {
        const checkCurrentSession = async () => {
        try {
            const currentAccount = await account.get();
            setUser(currentAccount as User);
        } catch (error) {
            setUser(null);
        }
        };

        checkCurrentSession();
    }, []);

    // Login with email and password
    const login = async (email: string, password: string) => {
        try {
        await account.createEmailPasswordSession(email, password);
        const currentAccount = await account.get();
        setUser(currentAccount as User);
        } catch (error) {
        console.error('Login failed', error);
        throw error;
        }
    };

    // Logout
    const logout = async () => {
        try {
        await account.deleteSession('current');
        setUser(null);
        } catch (error) {
        console.error('Logout failed', error);
        throw error;
        }
    };

    // Register new user
    const register = async ( email: string, password: string) => {
        try {
        await account.create(ID.unique(), email, password);
        await login(email, password);
        } catch (error) {
        console.error('Registration failed', error);
        throw error;
        }
    };

    // Login with Google
    const loginWithGoogle = async () => {
        try {
        await account.createOAuth2Session(
            "google" as OAuthProvider, 
            window.location.origin + '/dashboard', // Success redirect
            window.location.origin + '/login' // Failure redirect
        );
        } catch (error) {
        console.error('Google login failed', error);
        throw error;
        }
    };

    // Login with Phone (Initiate)
    const loginWithPhone = async (phoneNumber: string) => {
        try {

        const token =await account.createPhoneToken(ID.unique(), phoneNumber);
        return token.userId;
        } catch (error) {
        console.error('Phone login initiation failed', error);
        throw error;
        }
    };

    // Verify OTP
    const verifyOTP = async (userId: string, otp: string) => {
        try {
        const session = await account.updatePhoneSession(userId, otp);
        const currentAccount = await account.get();
        setUser(currentAccount as User);
        return session;
        } catch (error) {
        console.error('OTP verification failed', error);
        throw error;
        }
    };

    // Context value with all authentication methods
    const contextValue: UserContextType = {
        user,
        setUser,
        login,
        logout,
        register,
        loginWithGoogle,
        loginWithPhone,
        verifyOTP
    };
    
    return (
        <UserContext.Provider value={contextValue}>
        {children}
        </UserContext.Provider>
    );
};