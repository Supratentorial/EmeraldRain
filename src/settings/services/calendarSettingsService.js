var settings;
(function (settings) {
    var services;
    (function (services) {
        var CalendarSettingsService = (function () {
            function CalendarSettingsService() {
            }
            CalendarSettingsService.$inject = [];
            return CalendarSettingsService;
        }());
        services.CalendarSettingsService = CalendarSettingsService;
        angular.module("settings").service("CalendarSettingsService", CalendarSettingsService);
    })(services = settings.services || (settings.services = {}));
})(settings || (settings = {}));
