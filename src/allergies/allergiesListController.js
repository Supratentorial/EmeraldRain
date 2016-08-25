var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var AllergiesListController = (function () {
            function AllergiesListController(patientShellService, allergiesListService, $state) {
                this.patientShellService = patientShellService;
                this.allergiesListService = allergiesListService;
                this.$state = $state;
                var patientId = this.$state.params["patientId"];
                this.allergiesListService.getCurrentPatientAllergies();
            }
            AllergiesListController.$inject = ["PatientShellService", "AllergiesListService", "$state"];
            return AllergiesListController;
        }());
        controllers.AllergiesListController = AllergiesListController;
        angular.module("patient").controller("AllergiesListController", AllergiesListController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
