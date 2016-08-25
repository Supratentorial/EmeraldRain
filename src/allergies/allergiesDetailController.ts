module patient.controllers {
    export class AllergyDetailsController {
        currentAllergy: interfaces.models.allergy;
        static $inject = ["PatientManagerService", "AllergiesDetailService", "$state"];
        
        constructor(
            private patientShellService: interfaces.patientShellService,
            private allergiesDetailService: interfaces.allergiesDetailService,
            private $state: angular.ui.IStateService) {
            this.currentAllergy = <interfaces.models.allergy>{};


            var allergyId = this.$state.params["allergyId"];

            if (allergyId === 0) {
                this.currentAllergy = this.createNewAllergy();
            } else {
                this.allergiesDetailService.getAllergyById(allergyId).then(
                    (response) => {
                        this.currentAllergy = response.data;
                    },
                    (error) => { }
                );
            }
        }

        createNewAllergy(): interfaces.models.allergy {
            var now = moment();
            return <interfaces.models.allergy>{
                allergyId: 0,
                type: "",
                severity: "",
                recordedDate: now,
                substance: "",
                clinicalManifestation: "",
                note: "",
                patientId: this.patientShellService.currentPatient.patientId
            }
        }

        saveAllergy() {
            if (this.currentAllergy.allergyId === 0) {
                this.allergiesDetailService.addNewAllergy(this.currentAllergy).then(
                    (response) => {
                        angular.copy(response.data, this.currentAllergy);
                    }).finally(
                    () => {
                        this.$state.go("patient.detail.allergies.view");
                    });
            } else if (this.currentAllergy.allergyId != 0) {
                this.allergiesDetailService.updateExistingAllergy(this.currentAllergy).then(
                    (response) => { this.currentAllergy = response.data },
                    (error) => {
                    });
            }
        }
    }
    angular.module("patient").controller("AllergyDetailsController", AllergyDetailsController);
}