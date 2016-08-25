module patient.services {
    "use strict"
    export class PatientShellService {
        openPatients: interfaces.validatedPatient[] = [];
        currentPatient: interfaces.validatedPatient;

        static $inject: Array<string> = ["PatientService", "DemographicsService"];
        constructor(private patientService: interfaces.patientService, private demographicsService: interfaces.demographicsService) {

        }

        addPatientToOpenList(patient: interfaces.validatedPatient): void {
            if (!this.isPatientOpen(patient.patientId)) {
                this.openPatients.push(patient);
                patient.fullName = this.demographicsService.getFullNameWithTitle(patient.familyName, patient.givenName, patient.middleNames, patient.title);
            }
        }

        removePatientFromOpenList(patientId: number): void {
            for (var i; i < this.openPatients; i++) {
                if (patientId === this.openPatients[i].patientId) {
                    var index = this.openPatients.indexOf(this.openPatients[i]);
                    this.openPatients.splice(index, 1);
                }
            }
        }

        isPatientOpen(patientId: number): boolean {
            for (var i = 0; i < this.openPatients.length; i++) {
                if (patientId === this.openPatients[i].patientId) {
                    return true;
                }
            }
            return false;
        }

        setCurrentPatient(patientId: number): void {
            if (patientId) {
                for (var i = 0; i < this.openPatients.length; i++) {
                    if (patientId === this.openPatients[i].patientId) {
                        this.currentPatient = this.openPatients[i];
                    }
                }
            }
        }

        saveCurrentPatient(): angular.IPromise<any> {
            return this.patientService.updatePatient(this.currentPatient).then((result) => {
                angular.copy(result.data, this.currentPatient);
                this.currentPatient.fullName = this.demographicsService.getFullNameWithTitle(this.currentPatient.familyName, this.currentPatient.givenName, this.currentPatient.middleNames, this.currentPatient.title);
            })
        }

    }
    angular.module("patient").service("PatientShellService", PatientShellService);
}