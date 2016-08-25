module utilities.services {
    export class UtilitiesService {
        constructor() {
        }

        parseDate(dateOfBirthString: string): Date {
            var dateOfBirth: Date;
            if (!dateOfBirthString || 0 === dateOfBirthString.length) {
                return;
            }
            try {
                dateOfBirth = new Date(dateOfBirthString);
            }
            catch (e) {
                console.log(e.message);
                return;
            }
            return dateOfBirth;
        }
    }
    angular.module("utilities").service("UtilitiesService", UtilitiesService);
}