var common;
(function (common) {
    var services;
    (function (services) {
        var Moment = (function () {
            function Moment($window) {
                this.$window = $window;
                return this.$window.moment;
            }
            Moment.$inject = ["$window"];
            return Moment;
        }());
        services.Moment = Moment;
        angular.module("common").service("moment", Moment);
    })(services = common.services || (common.services = {}));
})(common || (common = {}));
