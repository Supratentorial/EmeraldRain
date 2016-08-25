var patient;
(function (patient) {
    var services;
    (function (services) {
        var DemographicsService = (function () {
            function DemographicsService() {
            }
            DemographicsService.prototype.createNewPhoneNumber = function (type) {
                return {
                    phoneNumberId: 0,
                    countryCode: "61",
                    areaCode: "3",
                    isPreferred: false,
                    type: type,
                    value: ""
                };
            };
            DemographicsService.prototype.createNewAddress = function (type) {
                return {
                    addressId: 0,
                    type: type,
                    state: "",
                    city: "",
                    country: "Australia",
                    postalCode: ""
                };
            };
            DemographicsService.prototype.isValidPhoneNumber = function (phoneNumber) {
                if (phoneNumber) {
                    if (phoneNumber.value && phoneNumber.countryCode) {
                        return true;
                    }
                }
            };
            DemographicsService.prototype.getFullNameWithTitle = function (familyName, givenName, middleNames, title) {
                var fullName = familyName + ", " + givenName;
                if (middleNames) {
                    fullName += " " + middleNames;
                }
                if (title) {
                    fullName += " (" + title + ")";
                }
                return fullName;
            };
            DemographicsService.$inject = [];
            return DemographicsService;
        }());
        services.DemographicsService = DemographicsService;
        angular.module("patient").service("DemographicsService", DemographicsService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
