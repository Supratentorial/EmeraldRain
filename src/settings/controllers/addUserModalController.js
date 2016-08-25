var settings;
(function (settings) {
    var controllers;
    (function (controllers) {
        var AddUserModalController = (function () {
            function AddUserModalController($uibModalInstance, userManagerService) {
                this.$uibModalInstance = $uibModalInstance;
                this.userManagerService = userManagerService;
            }
            AddUserModalController.prototype.saveNewUser = function () {
                var _this = this;
                this.userManagerService.saveNewUser(this.newUser).then(function () { }, function () { }).finally(function () {
                    _this.$uibModalInstance.dismiss();
                });
            };
            AddUserModalController.prototype.cancelAddUser = function () {
                this.$uibModalInstance.dismiss();
            };
            AddUserModalController.$inject = ["$uibModalInstance", "UserManagerService"];
            return AddUserModalController;
        }());
        controllers.AddUserModalController = AddUserModalController;
        angular.module("settings").controller("AddUserModalController", AddUserModalController);
    })(controllers = settings.controllers || (settings.controllers = {}));
})(settings || (settings = {}));
