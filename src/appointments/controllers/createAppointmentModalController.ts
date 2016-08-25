module patient.controllers {
    export class CreateAppointmentModalController {
        clinicians: interfaces.user[] = [];
        showCreateAppointment: boolean = false;
        newAppointment: interfaces.appointment = {
            appointmentId: 0,
            appointmentType: null,
            patientId: null,
            appointmentDateTime: null
        };

        static $inject: Array<string> = ["AppointmentService", "PatientService", "$uibModalInstance", "UserManagerService"]
        constructor(private appointmentService: interfaces.appointmentService,
            private patientService: interfaces.patientService,
            private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance,
            private userManagerService: interfaces.userManagerService) {
            this.userManagerService.getAllUsers().then((result) => {
                angular.copy(result, this.clinicians);
            });

        }

        searchPatients(searchString) {
            return this.patientService.searchPatients(searchString).then((response) => {
                return response.data;
            }); 
        }

        createAppointment() {
            this.appointmentService.saveNewAppointment(this.newAppointment);
        }

        patientSelected() {
            this.showCreateAppointment = true;
        }

        cancelCreateAppointment() {
            this.$uibModalInstance.dismiss();
        }
        
    }
    angular.module("patient").controller("CreateAppointmentModalController", CreateAppointmentModalController);
}