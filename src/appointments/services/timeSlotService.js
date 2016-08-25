"use strict";
var appointment;
(function (appointment) {
    var services;
    (function (services) {
        var TimeSlotService = (function () {
            function TimeSlotService() {
                this.timeSlotHeight = 2.5;
            }
            TimeSlotService.prototype.zoomIn = function () {
                if (this.timeSlotHeight < 5) {
                    return this.timeSlotHeight++;
                }
            };
            TimeSlotService.prototype.zoomOut = function () {
                if (this.timeSlotHeight > 1.5) {
                    return this.timeSlotHeight--;
                }
            };
            TimeSlotService.prototype.getTimeSlotHeight = function () {
                return this.timeSlotHeight;
            };
            TimeSlotService.$inject = [];
            return TimeSlotService;
        }());
        services.TimeSlotService = TimeSlotService;
        angular.module("appointment").service("TimeSlotService", TimeSlotService);
    })(services = appointment.services || (appointment.services = {}));
})(appointment || (appointment = {}));
