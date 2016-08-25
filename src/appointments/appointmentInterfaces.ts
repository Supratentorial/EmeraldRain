module interfaces {
    export interface appointment {
        appointmentId: number;
        appointmentDateTime: string;
        appointmentType: string;
        patientId: number;
    }

    export interface appointmentService {
        saveNewAppointment(appointment: appointment): angular.IPromise<any>;
    }
}