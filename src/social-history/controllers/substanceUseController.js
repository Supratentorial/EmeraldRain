var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var SubstanceUseController = (function () {
            function SubstanceUseController(socialHistoryService, patientShellService, $state) {
                this.socialHistoryService = socialHistoryService;
                this.patientShellService = patientShellService;
                this.$state = $state;
                this.isLoading = false;
            }
            SubstanceUseController.prototype.yearsSmoking = function () {
                var yearsSmoking = null;
                if (this.patientShellService.currentPatient.smokingHistory.smokingStatus === "Current smoker") {
                }
                var yearsSmoking = this.patientShellService.currentPatient.smokingHistory.ageSmokingCommenced - this.patientShellService.currentPatient.smokingHistory.ageSmokingCeased;
                return yearsSmoking;
            };
            SubstanceUseController.prototype.saveSocialHistoryObservations = function () {
                var _this = this;
                this.isLoading = true;
                this.patientShellService.saveCurrentPatient().then(function () {
                }).finally(function () {
                    _this.isLoading = false;
                    _this.$state.go("patient.detail.social-history-view");
                });
            };
            SubstanceUseController.$inject = ["SocialHistoryService", "PatientShellService", "$state"];
            return SubstanceUseController;
        }());
        controllers.SubstanceUseController = SubstanceUseController;
        angular.module("patient").controller("SubstanceUseController", SubstanceUseController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
