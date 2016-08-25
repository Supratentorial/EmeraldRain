var patient;
(function (patient) {
    var services;
    (function (services) {
        var SocialHistoryService = (function () {
            function SocialHistoryService($http, patientShellService) {
                this.$http = $http;
                this.patientShellService = patientShellService;
            }
            SocialHistoryService.prototype.createNewSocialHistory = function () {
                return {
                    socialHistoryId: 0,
                    ethnicity: null,
                    occupation: null,
                    maritalStatus: null
                };
            };
            SocialHistoryService.prototype.createNewSmokingHistory = function () {
                return {
                    smokingStatus: "",
                    ageSmokingCeased: null,
                    ageSmokingCommenced: null,
                    cigarettesPerDay: null
                };
            };
            SocialHistoryService.prototype.createNewAlcoholHistory = function () {
                return {
                    drinksPerDay: null,
                    alcoholStatus: null
                };
            };
            SocialHistoryService.$inject = ["$http", "PatientShellService"];
            return SocialHistoryService;
        }());
        services.SocialHistoryService = SocialHistoryService;
        angular.module("patient").service("SocialHistoryService", SocialHistoryService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
