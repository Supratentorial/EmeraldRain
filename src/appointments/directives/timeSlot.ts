module appointment.directives {
    "use strict"

    class TimeSlotController implements interfaces.controllers.TimeSlotController {
        static $inject: Array<string> = ["TimeSlotService"]
        timeSlotService: interfaces.services.timeSlotService;
        constructor(timeSlotService: interfaces.services.timeSlotService) {
            this.timeSlotService = timeSlotService;
        }
    }

    function timeSlot(): angular.IDirective {
        return {
            restrict: "E",
            templateUrl: "html/time-slot.html",
            replace: true,
            controller: TimeSlotController,
            controllerAs: "vm",
            link: (scope: angular.IScope, element: angular.IAugmentedJQuery, attributes: angular.IAttributes, controller: TimeSlotController): void => {

            }
        }
    }
    angular.module("appointment").directive("timeSlot", timeSlot);
}