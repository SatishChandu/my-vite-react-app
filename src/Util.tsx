export interface UserCredentials {
    email: string;
    password: string;
}

export const users: UserCredentials[] = [
    {email: "satish25@gmail.com", password: "Satish2596"},
    {email: "kumar96@gmail.com", password: "Kumar1996"},
    {email: "chandu302@gmail.com", password: "Chandu302"}
];

export const addUser = (email: string, password: string) => {
    users.push({email, password});
}