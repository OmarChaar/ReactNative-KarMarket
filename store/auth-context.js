import { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    user: null,
    isGuest: false,
    setUser: () => {},
    authenticate: () => {},
    logout: () => {},
    setGuest: () => {}
});

function AuthContextProvider({ children }) {

    const [authToken, setAuthToken] = useState();
    const [guest, setGuestHandler] = useState(false);
    const [userProfile, setUserHandler] = useState();

    function authenticate(token) {
        setAuthToken(token);

        // We want to store the token on the device. Must always be a string.
        AsyncStorage.setItem('token', token);
    }

    function setGuest() {
        setGuestHandler(true);
        AsyncStorage.setItem('isGuest', 'true');
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
        isGuest: guest,
        setUser: setUser,
        authenticate: authenticate,
        logout: logout,
        setGuest: setGuest
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;