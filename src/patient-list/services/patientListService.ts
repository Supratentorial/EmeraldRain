module patient.services {
    export class PatientListService implements interfaces.patientListService {
        static $inject = ["$http"];
        patientsWithAppointmentToday = [];
        constructor(private $http: angular.IHttpService) {
            
        }
        
        getRecentPatients() {

        }

        searchPatients(searchString: string) {
            return this.$http.get("api/patients/?search=" + searchString);
        }

        getAllPatients(): angular.IPromise<any> {
            return this.$http.get("api/patients/?hasAppointmentToday=true").then((result) => {
                angular.copy(result.data, this.patientsWithAppointmentToday);
            });
        }

        deletePatient() {

        }

        archivePatient() {

        }

    }
    angular.module("patient").service("PatientListService", PatientListService); 
}