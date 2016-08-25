var patient;
(function (patient) {
    var services;
    (function (services) {
        var AppointmentService = (function () {
            function AppointmentService($http) {
                this.$http = $http;
            }
            AppointmentService.prototype.saveNewAppointment = function (appointment) {
                this.$http.post("api/appointments", appointment);
            };
            AppointmentService.$inject = ["$http"];
            return AppointmentService;
        }());
        services.AppointmentService = AppointmentService;
        angular.module("patient").service("AppointmentService", AppointmentService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
