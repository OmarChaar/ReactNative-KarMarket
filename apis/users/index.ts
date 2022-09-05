import User from "../../types/user.types";
import { FIREBASE_ROOT_URL } from "../config";

export async function addUser(uid: string, email: string) {
    // TODO: change route to POST /user
    await FIREBASE_ROOT_URL.post("/addUser/", {
        uid,
        email,
    });

    // TODO: should probably return the added user here
    return;
}

export async function getUserData(uid: string) {
    // TODO: change route to GET /user/:uid
    const {data: user} = await FIREBASE_ROOT_URL.get<{user: User.UserData}>(`/getUser/${uid}`);

    return user;
}