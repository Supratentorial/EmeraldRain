module patient.controllers {
    export class CreatePatientModalController {
        newPatient: interfaces.patient;
        static $inject: Array<string> = ["$uibModalInstance", "PatientService", "$state"];
        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private patientService: interfaces.patientService, private $state: angular.ui.IStateService) {
            this.newPatient = this.patientService.createNewPatient();
        }

        saveNewPatient() {
            this.patientService.saveNewPatient(this.newPatient).then(
                (result) => {
                    this.$uibModalInstance.dismiss();
                    this.$state.go("patient.detail.summary", { "patientId": result.data.patientId });
                },
                () => {
                });
        }

        cancel() {
            this.$uibModalInstance.dismiss();
        }

    }
    angular.module("patient").controller("CreatePatientModalController", CreatePatientModalController);
}