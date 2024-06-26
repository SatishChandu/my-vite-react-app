export interface UserCredentials {
    email: string;
    password: string;
    mobile: string;
    fullName: string;
    organization: string;
}

export const users: UserCredentials[] = [
    {email: "satish25@gmail.com", password: "Satish2596", mobile: "9988776654", fullName: "Satish Kumar Chandu", organization: "CMSEdge Solutions Pvt. Ltd"},
    {email: "hussain796@gmail.com", password: "Kumar1996", mobile: "8877665542", fullName: "Mohammed Hussain", organization: "GoSure.AI Pvt. Ltd"},
    {email: "priyansh@gmail.com", password: "Chandu302", mobile: "7896543201", fullName: "Priyansh Chowdary", organization: "GoSure.AI Pvt. Ltd"}
];

export const addUser = (email: string, password: string, mobile: string, fullName: string, organization: string) => {
    users.push({email, password, mobile, fullName, organization});
}