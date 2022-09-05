export namespace User {

    export interface UserData {
        uid: string;
        email: string;
        displayName: string;
        measurements: string;
        language: string;
        notifications: boolean;
    }
}

export default User;