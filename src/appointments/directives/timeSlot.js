var appointment;
(function (appointment) {
    var directives;
    (function (directives) {
        "use strict";
        var TimeSlotController = (function () {
            function TimeSlotController(timeSlotService) {
                this.timeSlotService = timeSlotService;
            }
            TimeSlotController.$inject = ["TimeSlotService"];
            return TimeSlotController;
        }());
        function timeSlot() {
            return {
                restrict: "E",
                templateUrl: "html/time-slot.html",
                replace: true,
                controller: TimeSlotController,
                controllerAs: "vm",
                link: function (scope, element, attributes, controller) {
                }
            };
        }
        angular.module("appointment").directive("timeSlot", timeSlot);
    })(directives = appointment.directives || (appointment.directives = {}));
})(appointment || (appointment = {}));
