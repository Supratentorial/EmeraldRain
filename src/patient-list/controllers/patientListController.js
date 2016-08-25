var patient;
(function (patient_1) {
    var controllers;
    (function (controllers) {
        "use strict";
        var PatientListController = (function () {
            function PatientListController(patientListService, patientShellService, patientService, $uibModal, $state) {
                var _this = this;
                this.patientListService = patientListService;
                this.patientShellService = patientShellService;
                this.patientService = patientService;
                this.$uibModal = $uibModal;
                this.$state = $state;
                this.isLoading = false;
                this.searchString = "";
                this.isLoading = true;
                this.patientListService.getAllPatients().then().finally(function () {
                    _this.isLoading = false;
                });
            }
            PatientListController.prototype.createPatient = function () {
                this.$uibModal.open({
                    templateUrl: "html/create-patient-modal.html",
                    backdrop: "static",
                    controllerAs: "vm",
                    controller: "CreatePatientModalController"
                });
            };
            PatientListController.prototype.searchPatients = function (searchString) {
                return this.patientService.searchPatients(searchString).then(
                //Success function
                function (response) {
                    return response.data;
                }, 
                //Failure function
                function () { });
            };
            PatientListController.prototype.patientSelected = function (patient) {
                console.log(patient.patientId);
                this.$state.go("patient.detail", { patientId: patient.patientId });
            };
            PatientListController.$inject = ["PatientListService", "PatientShellService", "PatientService", "$uibModal", "$state"];
            return PatientListController;
        }());
        controllers.PatientListController = PatientListController;
        angular.module("patient").controller("PatientListController", PatientListController);
    })(controllers = patient_1.controllers || (patient_1.controllers = {}));
})(patient || (patient = {}));
