var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var PatientSummaryController = (function () {
            function PatientSummaryController(patientShellService) {
                this.patientShellService = patientShellService;
                this.isLoading = false;
            }
            PatientSummaryController.$inject = ["PatientShellService"];
            return PatientSummaryController;
        }());
        controllers.PatientSummaryController = PatientSummaryController;
        angular.module("patient").controller("PatientSummaryController", PatientSummaryController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
