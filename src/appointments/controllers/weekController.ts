module appointment.controllers {
    export class WeekController {
        static $inject: Array<string> = [];
        days = [{ day: "Monday" }, { day: "Tuesday" }];
        constructor() {

        }

    }
    angular.module("appointment").controller("WeekController", WeekController);
}