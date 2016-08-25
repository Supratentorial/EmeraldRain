module settings.services {
    export class CalendarSettingsService {
        timeSlotDurationMinutes: number;
        static $inject: Array<string> = [];
        constructor() {

        }

    }
    angular.module("settings").service("CalendarSettingsService", CalendarSettingsService);
}