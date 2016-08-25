module patient.controllers {
    export class SubstanceUseController {
        static $inject: Array<string> = ["SocialHistoryService", "PatientShellService", "$state"];

        isLoading: boolean = false;
        constructor(private socialHistoryService: interfaces.socialHistoryService, private patientShellService: interfaces.patientShellService, private $state: angular.ui.IStateService) {

        }

        yearsSmoking() {
            var yearsSmoking: number = null;
            if (this.patientShellService.currentPatient.smokingHistory.smokingStatus === "Current smoker") {
                
            }
            var yearsSmoking = this.patientShellService.currentPatient.smokingHistory.ageSmokingCommenced - this.patientShellService.currentPatient.smokingHistory.ageSmokingCeased;
            return yearsSmoking;
        }

        saveSocialHistoryObservations() {
            this.isLoading = true;
            this.patientShellService.saveCurrentPatient().then(() => {

            }).finally(() => {
                this.isLoading = false;
                this.$state.go("patient.detail.social-history-view");
            });
        }
    }
    angular.module("patient").controller("SubstanceUseController", SubstanceUseController);
}