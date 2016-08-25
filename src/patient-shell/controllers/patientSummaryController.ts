module patient.controllers {
    export class PatientSummaryController {
        isLoading: boolean = false;
        static $inject: Array<string> = ["PatientShellService"];
        constructor(private patientShellService: interfaces.patientShellService) {
            
        }
    }
    angular.module("patient").controller("PatientSummaryController", PatientSummaryController);
}