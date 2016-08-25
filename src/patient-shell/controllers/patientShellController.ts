module patient.controllers {
    export class PatientShellController {
        static $inject = ["PatientShellService", "PatientService", "DemographicsService", "$state"];
        constructor(private patientShellService: interfaces.patientShellService, private patientService: interfaces.patientService, private demographicsService: interfaces.demographicsService, private $state: angular.ui.IState) {
            var patientId: number = this.$state.params["patientId"];
            if (patientId != 0) {
                this.patientService.getPatientById(patientId).then((result) => {
                    this.patientShellService.addPatientToOpenList(result.data);
                    this.patientShellService.setCurrentPatient(patientId);
                    //if (this.patientShellService.currentPatient.mobilePhoneNumber === null) {
                    //    this.patientShellService.currentPatient.mobilePhoneNumber = this.demographicsService.createNewPhoneNumber("Mobile");
                    //}
                    //if (this.patientShellService.currentPatient.homePhoneNumber === null) {
                    //    this.patientShellService.currentPatient.homePhoneNumber = this.demographicsService.createNewPhoneNumber("Home");
                    //}
                    //if (this.patientShellService.currentPatient.residentialAddress === null) {
                    //    this.patientShellService.currentPatient.residentialAddress = this.demographicsService.createNewAddress("Residential");
                    //}
                }).finally(() => {

                });
            }
        }
    }
    angular.module("patient").controller("PatientShellController", PatientShellController);
}
