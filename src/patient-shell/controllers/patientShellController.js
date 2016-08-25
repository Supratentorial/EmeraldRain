var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var PatientShellController = (function () {
            function PatientShellController(patientShellService, patientService, demographicsService, $state) {
                var _this = this;
                this.patientShellService = patientShellService;
                this.patientService = patientService;
                this.demographicsService = demographicsService;
                this.$state = $state;
                var patientId = this.$state.params["patientId"];
                if (patientId != 0) {
                    this.patientService.getPatientById(patientId).then(function (result) {
                        _this.patientShellService.addPatientToOpenList(result.data);
                        _this.patientShellService.setCurrentPatient(patientId);
                        //if (this.patientShellService.currentPatient.mobilePhoneNumber === null) {
                        //    this.patientShellService.currentPatient.mobilePhoneNumber = this.demographicsService.createNewPhoneNumber("Mobile");
                        //}
                        //if (this.patientShellService.currentPatient.homePhoneNumber === null) {
                        //    this.patientShellService.currentPatient.homePhoneNumber = this.demographicsService.createNewPhoneNumber("Home");
                        //}
                        //if (this.patientShellService.currentPatient.residentialAddress === null) {
                        //    this.patientShellService.currentPatient.residentialAddress = this.demographicsService.createNewAddress("Residential");
                        //}
                    }).finally(function () {
                    });
                }
            }
            PatientShellController.$inject = ["PatientShellService", "PatientService", "DemographicsService", "$state"];
            return PatientShellController;
        }());
        controllers.PatientShellController = PatientShellController;
        angular.module("patient").controller("PatientShellController", PatientShellController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
