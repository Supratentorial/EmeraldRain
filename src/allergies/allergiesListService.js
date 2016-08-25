var patient;
(function (patient) {
    var services;
    (function (services) {
        var AllergiesListService = (function () {
            function AllergiesListService($http, $q, patientShellService) {
                this.$http = $http;
                this.$q = $q;
                this.patientShellService = patientShellService;
                this.currentPatientAllergies = [];
            }
            AllergiesListService.prototype.getCurrentPatientAllergies = function () {
                var _this = this;
                var deferred = this.$q.defer();
                return this.$http.get("api/patients/" + this.patientShellService.currentPatient.patientId + "/allergies").then(function (response) {
                    angular.copy(response.data, _this.currentPatientAllergies);
                    deferred.resolve();
                }, function (error) {
                    deferred.reject();
                });
                return deferred.promise;
            };
            AllergiesListService.$inject = ["$http", "$q", "PatientManagerService"];
            return AllergiesListService;
        }());
        services.AllergiesListService = AllergiesListService;
        angular.module("patient").service("AllergiesListService", AllergiesListService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
