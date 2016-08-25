module patient.services {
    export class AppointmentService {
        static $inject: Array<string> = ["$http"];
        constructor(private $http: angular.IHttpService) {
            
        }

        saveNewAppointment(appointment: interfaces.appointment) {
            this.$http.post("api/appointments", appointment);
        }


    }
    angular.module("patient").service("AppointmentService", AppointmentService);
}