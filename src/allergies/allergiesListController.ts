module patient.controllers {
    export class AllergiesListController {

        static $inject = ["PatientShellService", "AllergiesListService", "$state"];

        constructor(private patientShellService: interfaces.patientShellService, private allergiesListService: interfaces.allergiesListService, private $state: angular.ui.IStateService) {
            var patientId = this.$state.params["patientId"];
            this.allergiesListService.getCurrentPatientAllergies();
        }
    }
    angular.module("patient").controller("AllergiesListController", AllergiesListController);
}