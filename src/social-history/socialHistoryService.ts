module patient.services {
    export class SocialHistoryService implements interfaces.socialHistoryService {
        static $inject: Array<string> = ["$http", "PatientShellService"];
        constructor(private $http: angular.IHttpService, private patientShellService: interfaces.patientShellService) {

        }

        createNewSocialHistory(): interfaces.socialHistory {
            return <interfaces.socialHistory>{
                socialHistoryId: 0,
                ethnicity: null,
                occupation: null,
                maritalStatus: null
            }
        }

        createNewSmokingHistory() {
            return <interfaces.smokingHistory>{
                smokingStatus: "",
                ageSmokingCeased: null,
                ageSmokingCommenced: null,
                cigarettesPerDay: null
            }
        }

        createNewAlcoholHistory() {
            return <interfaces.alcoholHistory>{
                drinksPerDay: null,
                alcoholStatus: null
            }
        }
    }
    angular.module("patient").service("SocialHistoryService", SocialHistoryService);
}