var apointment;
(function (apointment) {
    var services;
    (function (services) {
        var WeekService = (function () {
            function WeekService() {
            }
            WeekService.$inject = [];
            return WeekService;
        }());
        services.WeekService = WeekService;
        angular.module("appointment").service("WeekService", WeekService);
    })(services = apointment.services || (apointment.services = {}));
})(apointment || (apointment = {}));
