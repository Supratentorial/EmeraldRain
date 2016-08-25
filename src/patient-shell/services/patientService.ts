//Manages currently open patients.
module patient.services {
    export class PatientService implements interfaces.patientService {
        static $inject = ["$http", "$q", "moment"];

        constructor(private $http: angular.IHttpService, private $q: angular.IQService, private moment: moment.MomentStatic) {
            
        }

        createNewPatient(): interfaces.patient {
            return <interfaces.patient>{
                patientId: 0,
                title: null,
                givenName: null,
                middleNames: null,
                familyName: null,
                preferredName: null,
                gender: null,
                dateOfBirth: null,
                mobilePhoneNumber: null,
                homePhoneNumber: null,
                workPhoneNumber: null,
                preferredContact: null,
                residentialAddress: null,
                socialHistory: null,
                smokingHistory: null,
                alcoholHistory: null,
                drugHistory: null,
                vitalSigns: [],
                isActive: true,
                medicareCardNumber: null,
                medicareCardExpiry: null,
                medicareCardPosition: null,
                phoneNumbers: [],
                residentialAddress: null,
                postalAddress: null,
                emailAddress: null
            }
        }

        getPatientById(patientId: number): angular.IPromise<any> {
            return this.$http.get("api/patients/" + patientId + "?detailed=true");
        }

        saveNewPatient(newPatient: interfaces.patient): angular.IPromise<any> {
            var validatedPatient = <interfaces.validatedPatient>{};
            validatedPatient.patientId = newPatient.patientId;
            validatedPatient.title = newPatient.title;
            validatedPatient.givenName = newPatient.givenName;
            validatedPatient.middleNames = newPatient.middleNames;
            validatedPatient.familyName = newPatient.familyName;
            validatedPatient.preferredName = newPatient.preferredName;
            validatedPatient.gender = newPatient.gender;
            validatedPatient.dateOfBirth = moment(newPatient.dateOfBirth, "DD-MM-YYYY").toDate();
            validatedPatient.phoneNumbers.push(newPatient.mobilePhoneNumber, newPatient.homePhoneNumber, newPatient.workPhoneNumber);
            validatedPatient.addresses.push(newPatient.postalAddress, newPatient.residentialAddress);
            validatedPatient.emailAddress = newPatient.emailAddress;
            validatedPatient.socialHistory = newPatient.socialHistory;


            if (newPatient.patientId === 0) {
                return this.$http.post("api/patients", newPatient);
            }
        }

        updatePatient(updatedPatient: interfaces.validatedPatient): angular.IPromise<any> {
            return this.$http.put("api/patients/" + updatedPatient.patientId, updatedPatient);
        }

        searchPatients(searchString: string): angular.IPromise<any> {
            return this.$http.get("api/patients/?searchString=" + searchString);
        };
    }
    angular.module("patient").service("PatientService", PatientService);
}