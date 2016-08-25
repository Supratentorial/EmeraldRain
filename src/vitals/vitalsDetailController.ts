module patient.controllers {
    export class VitalsDetailController {
        static $inject: Array<string> = ["VitalsService", "PatientShellService", "$state"];
        currentVitalSigns: interfaces.vitalSign;
        isLoading: boolean = false;

        constructor(private vitalsService: interfaces.vitalsService, private patientShellService: interfaces.patientShellService, private $state: angular.ui.IStateService) {
            var vitalsId = this.$state.params["vitalsId"];
            console.log(vitalsId);
            if (vitalsId) {
                this.vitalsService.getVitalsById(vitalsId);
            }
            this.currentVitalSigns = this.vitalsService.createNewVitalSigns();
        }

        saveVitalSigns() {
            this.isLoading = true;
            this.vitalsService.saveVitalSigns(this.currentVitalSigns);
            this.patientShellService.saveCurrentPatient().finally(
                () => {
                    this.isLoading = false
                    this.$state.go("patient.detail.vitals-view");
                });
        }


    }
    angular.module("patient").controller("VitalsDetailController", VitalsDetailController);
}