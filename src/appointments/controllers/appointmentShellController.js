var appointment;
(function (appointment) {
    var controllers;
    (function (controllers) {
        var AppointmentShellController = (function () {
            function AppointmentShellController(sessionService, timeSlotService, $uibModal) {
                this.sessionService = sessionService;
                this.$uibModal = $uibModal;
                this.timeSlotService = timeSlotService;
                this.selectedView = "Week";
                this.timeSlots = this.sessionService.getSessionTimeSlots();
            }
            AppointmentShellController.prototype.createAppointment = function () {
                this.$uibModal.open({
                    templateUrl: "html/create-appointment-modal.html",
                    controller: "CreateAppointmentModalController",
                    controllerAs: "vm"
                });
            };
            AppointmentShellController.prototype.zoomOut = function () {
                this.timeSlotService.zoomOut();
            };
            AppointmentShellController.prototype.zoomIn = function () {
                this.timeSlotService.zoomIn();
            };
            AppointmentShellController.$inject = ["SessionService", "TimeSlotService", "$uibModal"];
            return AppointmentShellController;
        }());
        controllers.AppointmentShellController = AppointmentShellController;
        angular.module("appointment").controller("AppointmentShellController", AppointmentShellController);
    })(controllers = appointment.controllers || (appointment.controllers = {}));
})(appointment || (appointment = {}));
