export interface Address {
    title: string;
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    userEmail: string;
}

export interface AddressDocument extends Address {
    users: any;
    _id: string;
    __v: number;
}
