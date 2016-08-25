module appointment.services {
    export class SessionService implements interfaces.services.sessionService {

        static $inject = [];
        constructor() {

        }

        getSessionHours() {

        }

        getSessionStartTime() {

        }

        getSessionTimeSlots(): interfaces.models.timeSlot[] {
            var timeSlots: interfaces.models.timeSlot[] = [];
            for (var i = 0; i < 24; i++) {
                timeSlots.push(<interfaces.models.timeSlot>{

                });             
            }
            return timeSlots;
        }

    }
    angular.module("appointment").service("SessionService", SessionService);
}