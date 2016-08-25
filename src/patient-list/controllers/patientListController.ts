module patient.controllers {
    "use strict"
    export class PatientListController {
        isLoading: boolean = false;
        searchString: string = "";
        static $inject = ["PatientListService", "PatientShellService", "PatientService", "$uibModal", "$state"];

        constructor(private patientListService: interfaces.patientListService, private patientShellService: interfaces.patientShellService, private patientService: interfaces.patientService, private $uibModal: angular.ui.bootstrap.IModalService, private $state: angular.ui.IStateService) {
            this.isLoading = true;
            this.patientListService.getAllPatients().then().finally(() => {
                this.isLoading = false;
            });
        }

        createPatient() {
            this.$uibModal.open({
                templateUrl: "html/create-patient-modal.html",
                backdrop: "static",
                controllerAs: "vm",
                controller: "CreatePatientModalController"
            })
        }

        searchPatients(searchString: string) {
            return this.patientService.searchPatients(searchString).then(
                //Success function
                (response) => {
                    return response.data;
                },
                //Failure function
                () => { });
        }

        patientSelected(patient: interfaces.validatedPatient) {
            console.log(patient.patientId);
            this.$state.go("patient.detail", { patientId: patient.patientId });

        }

    }
    angular.module("patient").controller("PatientListController", PatientListController);
}