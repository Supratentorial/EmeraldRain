var patient;
(function (patient) {
    var services;
    (function (services) {
        var EncountersService = (function () {
            function EncountersService($http, patientShellService) {
                this.$http = $http;
                this.patientShellService = patientShellService;
            }
            EncountersService.prototype.getCurrentPatientPastEncounters = function (patientId) {
                return this.$http.get("api/patients/" + this.patientShellService.currentPatient.patientId + "/encounters");
            };
            EncountersService.prototype.saveEncounter = function (encounter) { };
            EncountersService.prototype.addAction = function (action) {
            };
            EncountersService.$inject = ["http", "PatientShellService"];
            return EncountersService;
        }());
        services.EncountersService = EncountersService;
        angular.module("patient").service("EncountersService", EncountersService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
