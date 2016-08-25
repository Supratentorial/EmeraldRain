module interfaces {
    export interface demographicsService {
        createNewPhoneNumber(type: string): interfaces.phoneNumber;
        createNewAddress(type: string): interfaces.address;
        isValidPhoneNumber(phoneNumber: interfaces.phoneNumber): boolean;
        getFullNameWithTitle(familyName: string, givenName: string, middleNames: string, title: string): string;
    }
}
