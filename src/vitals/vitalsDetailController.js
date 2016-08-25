var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var VitalsDetailController = (function () {
            function VitalsDetailController(vitalsService, patientShellService, $state) {
                this.vitalsService = vitalsService;
                this.patientShellService = patientShellService;
                this.$state = $state;
                this.isLoading = false;
                var vitalsId = this.$state.params["vitalsId"];
                console.log(vitalsId);
                if (vitalsId) {
                    this.vitalsService.getVitalsById(vitalsId);
                }
                this.currentVitalSigns = this.vitalsService.createNewVitalSigns();
            }
            VitalsDetailController.prototype.saveVitalSigns = function () {
                var _this = this;
                this.isLoading = true;
                this.vitalsService.saveVitalSigns(this.currentVitalSigns);
                this.patientShellService.saveCurrentPatient().finally(function () {
                    _this.isLoading = false;
                    _this.$state.go("patient.detail.vitals-view");
                });
            };
            VitalsDetailController.$inject = ["VitalsService", "PatientShellService", "$state"];
            return VitalsDetailController;
        }());
        controllers.VitalsDetailController = VitalsDetailController;
        angular.module("patient").controller("VitalsDetailController", VitalsDetailController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
