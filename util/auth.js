import axios from 'axios';
import { addUser, getUserData } from './firebase';

const API_KEY = 'AIzaSyAQ5BHmb9EEM9LcX62Jr6QFJrjcTDXmVVs';

async function authenticate(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true
    });

    const token = response.data.idToken;

    if(mode == 'signUp') {
        const userData = await getAccountInfo(token);
        await addUser(userData.uid, userData.email);
    }

    return token;
}

async function getAccountInfo(idToken) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`;

    const response = await axios.post(url, {
        idToken: idToken
    });

    console.log("response", response);

    const uid = response.data.users[0].localId;
    const email = response.data.users[0].email;

    return {uid: uid, email: email};
}

export async function getUser(idToken) {
    const userData = await getAccountInfo(idToken);
    console.log("userData", userData)
    return getUserData(userData.uid);
}

export function createUser(email, password) {
   return authenticate('signUp', email, password);
}

export function login(email, password) {
    return authenticate('signInWithPassword', email, password);
 }
