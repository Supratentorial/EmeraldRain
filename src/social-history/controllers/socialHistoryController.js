var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var SocialHistoryController = (function () {
            function SocialHistoryController(patientShellService, $state) {
                this.patientShellService = patientShellService;
                this.$state = $state;
                this.isLoading = false;
                this.ethnicities = ["Asian", "Caucasian", "Black"];
                this.religions = ["None", "Christianity", "Buddhism", "Hinduism", "Islam", "Judaism", "Other"];
            }
            SocialHistoryController.prototype.saveSocialHistory = function () {
                var _this = this;
                this.isLoading = true;
                this.patientShellService.saveCurrentPatient()
                    .then(function () {
                })
                    .finally(function () {
                    _this.isLoading = false;
                    _this.$state.go("patient.detail.social-history-view");
                });
            };
            SocialHistoryController.$inject = ["PatientShellService", "$state"];
            return SocialHistoryController;
        }());
        controllers.SocialHistoryController = SocialHistoryController;
        angular.module("patient").controller("SocialHistoryController", SocialHistoryController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
