export default class User {
    constructor(uid, email, displayName, measurements, language, notifications) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName;
        this.measurements = measurements;
        this.language = language;
        this.notifications = notifications;
    }
}