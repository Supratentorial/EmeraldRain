var appointment;
(function (appointment) {
    var services;
    (function (services) {
        var SessionService = (function () {
            function SessionService() {
            }
            SessionService.prototype.getSessionHours = function () {
            };
            SessionService.prototype.getSessionStartTime = function () {
            };
            SessionService.prototype.getSessionTimeSlots = function () {
                var timeSlots = [];
                for (var i = 0; i < 24; i++) {
                    timeSlots.push({});
                }
                return timeSlots;
            };
            SessionService.$inject = [];
            return SessionService;
        }());
        services.SessionService = SessionService;
        angular.module("appointment").service("SessionService", SessionService);
    })(services = appointment.services || (appointment.services = {}));
})(appointment || (appointment = {}));
