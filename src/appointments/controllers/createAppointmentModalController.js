var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var CreateAppointmentModalController = (function () {
            function CreateAppointmentModalController(appointmentService, patientService, $uibModalInstance, userManagerService) {
                var _this = this;
                this.appointmentService = appointmentService;
                this.patientService = patientService;
                this.$uibModalInstance = $uibModalInstance;
                this.userManagerService = userManagerService;
                this.clinicians = [];
                this.showCreateAppointment = false;
                this.newAppointment = {
                    appointmentId: 0,
                    appointmentType: null,
                    patientId: null,
                    appointmentDateTime: null
                };
                this.userManagerService.getAllUsers().then(function (result) {
                    angular.copy(result, _this.clinicians);
                });
            }
            CreateAppointmentModalController.prototype.searchPatients = function (searchString) {
                return this.patientService.searchPatients(searchString).then(function (response) {
                    return response.data;
                });
            };
            CreateAppointmentModalController.prototype.createAppointment = function () {
                this.appointmentService.saveNewAppointment(this.newAppointment);
            };
            CreateAppointmentModalController.prototype.patientSelected = function () {
                this.showCreateAppointment = true;
            };
            CreateAppointmentModalController.prototype.cancelCreateAppointment = function () {
                this.$uibModalInstance.dismiss();
            };
            CreateAppointmentModalController.$inject = ["AppointmentService", "PatientService", "$uibModalInstance", "UserManagerService"];
            return CreateAppointmentModalController;
        }());
        controllers.CreateAppointmentModalController = CreateAppointmentModalController;
        angular.module("patient").controller("CreateAppointmentModalController", CreateAppointmentModalController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
