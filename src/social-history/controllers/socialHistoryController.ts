module patient.controllers {
    export class SocialHistoryController {
        isLoading: boolean = false;
        ethnicities: Array<string> = ["Asian", "Caucasian", "Black"];
        religions: Array<string> = ["None", "Christianity", "Buddhism", "Hinduism", "Islam", "Judaism", "Other"]
        static $inject: Array<string> = ["PatientShellService", "$state"];
        constructor(private patientShellService: interfaces.patientShellService, private $state: angular.ui.IStateService) {
            
        }
        
        saveSocialHistory() {
            this.isLoading = true;
            this.patientShellService.saveCurrentPatient()
                .then(() => {
                    
                })
                .finally(() => {
                    this.isLoading = false;
                    this.$state.go("patient.detail.social-history-view");
            })
        }

    }
    angular.module("patient").controller("SocialHistoryController", SocialHistoryController);
}