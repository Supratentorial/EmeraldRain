module appointment.controllers {
    export class AppointmentShellController {
        selectedView: string;
        timeSlots: interfaces.models.timeSlot[];
        timeSlotService: interfaces.services.timeSlotService;
        static $inject: Array<string> = ["SessionService", "TimeSlotService", "$uibModal"];
        constructor(private sessionService: interfaces.services.sessionService, timeSlotService: interfaces.services.timeSlotService, private $uibModal: angular.ui.bootstrap.IModalService) {
            this.timeSlotService = timeSlotService;
            this.selectedView = "Week";
            this.timeSlots = this.sessionService.getSessionTimeSlots();
        }

        createAppointment() {
            this.$uibModal.open({
                templateUrl: "html/create-appointment-modal.html",
                controller: "CreateAppointmentModalController",
                controllerAs: "vm"
            })
        }

        zoomOut() {
            this.timeSlotService.zoomOut();
        }

        zoomIn() {
            this.timeSlotService.zoomIn();
        }

    }
    angular.module("appointment").controller("AppointmentShellController", AppointmentShellController);
}