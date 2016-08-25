module patient.services {
    export class EncountersService {
        static $inject = ["http", "PatientShellService"];
        constructor(private $http: angular.IHttpService, private patientShellService: interfaces.patientShellService) {

        }

        getCurrentPatientPastEncounters(patientId: number) {
            return this.$http.get("api/patients/" + this.patientShellService.currentPatient.patientId + "/encounters");
        }

        saveEncounter(encounter: interfaces.models.encounter) { }

        addAction(action) {
            
        }
    }

    angular.module("patient").service("EncountersService", EncountersService);
}