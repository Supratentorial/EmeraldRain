var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var CreatePatientModalController = (function () {
            function CreatePatientModalController($uibModalInstance, patientService, $state) {
                this.$uibModalInstance = $uibModalInstance;
                this.patientService = patientService;
                this.$state = $state;
                this.newPatient = this.patientService.createNewPatient();
            }
            CreatePatientModalController.prototype.saveNewPatient = function () {
                var _this = this;
                this.patientService.saveNewPatient(this.newPatient).then(function (result) {
                    _this.$uibModalInstance.dismiss();
                    _this.$state.go("patient.detail.summary", { "patientId": result.data.patientId });
                }, function () {
                });
            };
            CreatePatientModalController.prototype.cancel = function () {
                this.$uibModalInstance.dismiss();
            };
            CreatePatientModalController.$inject = ["$uibModalInstance", "PatientService", "$state"];
            return CreatePatientModalController;
        }());
        controllers.CreatePatientModalController = CreatePatientModalController;
        angular.module("patient").controller("CreatePatientModalController", CreatePatientModalController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
