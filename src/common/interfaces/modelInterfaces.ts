 module interfaces {

     export interface patient {
         patientId: number;
         title: string;
         givenName: string;
         middleNames: string;
         familyName: string;
         fullName: string;
         preferredName: string;
         gender: string;
         dateOfBirth: string;
         age: string;
         isActive: boolean;

         emailAddress: emailAddress;

         medicareCardNumber?: number;
         medicareCardExpiry?: string;
         medicareCardPosition?: number;

         mobilePhoneNumber: phoneNumber;
         homePhoneNumber: phoneNumber;
         workPhoneNumber: phoneNumber;

         residentialAddress: address;
         postalAddress: address;
         socialHistory: socialHistory;
         smokingHistory: smokingHistory;
         alcoholHistory: alcoholHistory;
         drugHistory: drugHistory;
         vitalSigns: vitalSign[];
     }

     export interface validatedPatient {
         patientId: number;
         title: string;
         givenName: string;
         middleNames: string;
         familyName: string;
         preferredName: string;
         gender: string;
         dateOfBirth: Date;
         //age: string;
         isActive: boolean;

         emailAddress: emailAddress;

         medicareCardNumber?: number;
         medicareCardExpiry?: string;
         medicareCardPosition?: number;

         phoneNumbers: phoneNumber[];

         addresses: address[];
         socialHistory: socialHistory;
         smokingHistory: smokingHistory;
         alcoholHistory: alcoholHistory;
         drugHistory: drugHistory;
         vitalSigns: vitalSign[];
     }

     export interface emailAddress {
         emailAddressId: number;
         emailValue: string;
         isPreferred: boolean;
     }

     export interface phoneNumber {
         phoneNumberId: number;
         countryCode: string;
         areaCode?: string;
         value: string;
         type: string;
         isPreferred: boolean;
     }

     export interface address {
         addressId: number;
         type: string;
         city: string;
         state: string;
         postalCode: string;
         country: string;
     }

    export interface allergy {
        allergyId: number;
        recordedDate: moment.Moment;
        substance: string;
        severity: string; //mild | moderate | severe
        type: string; //allergy | intolerance | overdose
        note: string;
        clinicalManifestation: string;
        patientId: number;
    }

    export interface encounter {
        encounterId: number;
        patientId: number;

    }


    export interface timeSlot {
        
    }

}