var settings;
(function (settings) {
    var services;
    (function (services) {
        var UserManagerService = (function () {
            function UserManagerService($http) {
                this.$http = $http;
            }
            UserManagerService.prototype.getAllUsers = function () {
                return this.$http.get("api/users");
            };
            UserManagerService.prototype.saveNewUser = function (newUser) {
                return this.$http.post("api/users", newUser);
            };
            UserManagerService.$inject = ["$http"];
            return UserManagerService;
        }());
        services.UserManagerService = UserManagerService;
        angular.module("settings").service("UserManagerService", UserManagerService);
    })(services = settings.services || (settings.services = {}));
})(settings || (settings = {}));
