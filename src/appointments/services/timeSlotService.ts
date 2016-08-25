"use strict"
module appointment.services {
    export class TimeSlotService implements interfaces.services.timeSlotService {
        timeSlotHeight: number;
        static $inject: Array<string> = [];
        constructor() {
            this.timeSlotHeight = 2.5;
        }

        zoomIn() {
            if (this.timeSlotHeight < 5) {
                return this.timeSlotHeight++;
            }
        }

        zoomOut() {
            if (this.timeSlotHeight > 1.5) {
                return this.timeSlotHeight--;
            }
        }

        getTimeSlotHeight(): number{
            return this.timeSlotHeight;
        }
    }
    angular.module("appointment").service("TimeSlotService", TimeSlotService);
}