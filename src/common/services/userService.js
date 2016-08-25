var common;
(function (common) {
    var services;
    (function (services) {
        var UserService = (function () {
            function UserService() {
            }
            UserService.prototype.getCurrentUserId = function () {
            };
            UserService.$inject = [];
            return UserService;
        }());
        services.UserService = UserService;
    })(services = common.services || (common.services = {}));
})(common || (common = {}));
