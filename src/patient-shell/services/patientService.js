//Manages currently open patients.
var patient;
(function (patient) {
    var services;
    (function (services) {
        var PatientService = (function () {
            function PatientService($http, $q, moment) {
                this.$http = $http;
                this.$q = $q;
                this.moment = moment;
            }
            PatientService.prototype.createNewPatient = function () {
                return {
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
                };
            };
            PatientService.prototype.getPatientById = function (patientId) {
                return this.$http.get("api/patients/" + patientId + "?detailed=true");
            };
            PatientService.prototype.saveNewPatient = function (newPatient) {
                var validatedPatient = {};
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
            };
            PatientService.prototype.updatePatient = function (updatedPatient) {
                return this.$http.put("api/patients/" + updatedPatient.patientId, updatedPatient);
            };
            PatientService.prototype.searchPatients = function (searchString) {
                return this.$http.get("api/patients/?searchString=" + searchString);
            };
            ;
            PatientService.$inject = ["$http", "$q", "moment"];
            return PatientService;
        }());
        services.PatientService = PatientService;
        angular.module("patient").service("PatientService", PatientService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
