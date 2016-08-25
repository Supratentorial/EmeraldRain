module patient.controllers {
    "use strict"
    export class DemographicsController {

        genderOptions: string[] = ["Male", "Female"];
        titleOptions: string[] = ["Mr", "Mrs", "Master", "Ms", "Doctor"];
        contactOptions: string[] = ["Mobile", "Home", "Work", "Email"];
        isLoading: boolean = false;

        static $inject = ["PatientShellService", "$state"];
        constructor(
            private patientShellService: interfaces.patientShellService,
            private $state: angular.ui.IStateService) {
        }

        savePatient(): void {
            this.isLoading = true;
            this.patientShellService.saveCurrentPatient().then(
                () => {
                    console.log("patient saved successfully");
                },
                () => { console.log("patient failed to save") })
                .finally(
                () => {
                    this.isLoading = false;
                    this.$state.go("patient.detail.summary");
                })
        }

    }
    angular.module("patient").controller("DemographicsController", DemographicsController);
}