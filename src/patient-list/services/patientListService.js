var patient;
(function (patient) {
    var services;
    (function (services) {
        var PatientListService = (function () {
            function PatientListService($http) {
                this.$http = $http;
                this.patientsWithAppointmentToday = [];
            }
            PatientListService.prototype.getRecentPatients = function () {
            };
            PatientListService.prototype.searchPatients = function (searchString) {
                return this.$http.get("api/patients/?search=" + searchString);
            };
            PatientListService.prototype.getAllPatients = function () {
                var _this = this;
                return this.$http.get("api/patients/?hasAppointmentToday=true").then(function (result) {
                    angular.copy(result.data, _this.patientsWithAppointmentToday);
                });
            };
            PatientListService.prototype.deletePatient = function () {
            };
            PatientListService.prototype.archivePatient = function () {
            };
            PatientListService.$inject = ["$http"];
            return PatientListService;
        }());
        services.PatientListService = PatientListService;
        angular.module("patient").service("PatientListService", PatientListService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
