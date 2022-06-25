import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    user: null,
    setUser: () => {},
    authenticate: () => {},
    logout: () => {}
});

function AuthContextProvider({ children }) {

    const [authToken, setAuthToken] = useState();
    const [userProfile, setUserHandler] = useState();

    function authenticate(token) {
        setAuthToken(token);

        // We want to store the token on the device. Must always be a string.
        AsyncStorage.setItem('token', token);
    }

    function setUser(user) {
        setUserHandler(user);
    }

    function logout() {
        setAuthToken(null);
        AsyncStorage.removeItem('token');

    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        user: userProfile,
        setUser: setUser,
        authenticate: authenticate,
        logout: logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;