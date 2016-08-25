var utilities;
(function (utilities) {
    var services;
    (function (services) {
        var UtilitiesService = (function () {
            function UtilitiesService() {
            }
            UtilitiesService.prototype.parseDate = function (dateOfBirthString) {
                var dateOfBirth;
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
            };
            return UtilitiesService;
        }());
        services.UtilitiesService = UtilitiesService;
        angular.module("utilities").service("UtilitiesService", UtilitiesService);
    })(services = utilities.services || (utilities.services = {}));
})(utilities || (utilities = {}));
