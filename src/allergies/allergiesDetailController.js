var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var AllergyDetailsController = (function () {
            function AllergyDetailsController(patientShellService, allergiesDetailService, $state) {
                var _this = this;
                this.patientShellService = patientShellService;
                this.allergiesDetailService = allergiesDetailService;
                this.$state = $state;
                this.currentAllergy = {};
                var allergyId = this.$state.params["allergyId"];
                if (allergyId === 0) {
                    this.currentAllergy = this.createNewAllergy();
                }
                else {
                    this.allergiesDetailService.getAllergyById(allergyId).then(function (response) {
                        _this.currentAllergy = response.data;
                    }, function (error) { });
                }
            }
            AllergyDetailsController.prototype.createNewAllergy = function () {
                var now = moment();
                return {
                    allergyId: 0,
                    type: "",
                    severity: "",
                    recordedDate: now,
                    substance: "",
                    clinicalManifestation: "",
                    note: "",
                    patientId: this.patientShellService.currentPatient.patientId
                };
            };
            AllergyDetailsController.prototype.saveAllergy = function () {
                var _this = this;
                if (this.currentAllergy.allergyId === 0) {
                    this.allergiesDetailService.addNewAllergy(this.currentAllergy).then(function (response) {
                        angular.copy(response.data, _this.currentAllergy);
                    }).finally(function () {
                        _this.$state.go("patient.detail.allergies.view");
                    });
                }
                else if (this.currentAllergy.allergyId != 0) {
                    this.allergiesDetailService.updateExistingAllergy(this.currentAllergy).then(function (response) { _this.currentAllergy = response.data; }, function (error) {
                    });
                }
            };
            AllergyDetailsController.$inject = ["PatientManagerService", "AllergiesDetailService", "$state"];
            return AllergyDetailsController;
        }());
        controllers.AllergyDetailsController = AllergyDetailsController;
        angular.module("patient").controller("AllergyDetailsController", AllergyDetailsController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
