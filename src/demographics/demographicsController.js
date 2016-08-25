var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        "use strict";
        var DemographicsController = (function () {
            function DemographicsController(patientShellService, $state) {
                this.patientShellService = patientShellService;
                this.$state = $state;
                this.genderOptions = ["Male", "Female"];
                this.titleOptions = ["Mr", "Mrs", "Master", "Ms", "Doctor"];
                this.contactOptions = ["Mobile", "Home", "Work", "Email"];
                this.isLoading = false;
            }
            DemographicsController.prototype.savePatient = function () {
                var _this = this;
                this.isLoading = true;
                this.patientShellService.saveCurrentPatient().then(function () {
                    console.log("patient saved successfully");
                }, function () { console.log("patient failed to save"); })
                    .finally(function () {
                    _this.isLoading = false;
                    _this.$state.go("patient.detail.summary");
                });
            };
            DemographicsController.$inject = ["PatientShellService", "$state"];
            return DemographicsController;
        }());
        controllers.DemographicsController = DemographicsController;
        angular.module("patient").controller("DemographicsController", DemographicsController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
