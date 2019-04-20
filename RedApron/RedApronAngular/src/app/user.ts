export class User {
    addressLine1: string;
    addressLine2: string;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    postalCode: number;
    subscriberId : number;
    // password: string;

    constructor(addressLine1?: string, addressLine2?: string, email?: string, firstName?: string, lastName?: string, phoneNumber?: string, postalCode?: number, subscriberId?: number) {
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.postalCode = postalCode;
        this.subscriberId = subscriberId;
    }
}