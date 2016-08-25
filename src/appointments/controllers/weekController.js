var appointment;
(function (appointment) {
    var controllers;
    (function (controllers) {
        var WeekController = (function () {
            function WeekController() {
                this.days = [{ day: "Monday" }, { day: "Tuesday" }];
            }
            WeekController.$inject = [];
            return WeekController;
        }());
        controllers.WeekController = WeekController;
        angular.module("appointment").controller("WeekController", WeekController);
    })(controllers = appointment.controllers || (appointment.controllers = {}));
})(appointment || (appointment = {}));
