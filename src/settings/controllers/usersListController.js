var settings;
(function (settings) {
    var controllers;
    (function (controllers) {
        var UsersListController = (function () {
            function UsersListController($uibModal, userManagerService) {
                var _this = this;
                this.$uibModal = $uibModal;
                this.userManagerService = userManagerService;
                this.users = [];
                this.userManagerService.getAllUsers().then(function (result) {
                    angular.copy(result.data, _this.users);
                    console.log(_this.users);
                }, function () { });
            }
            UsersListController.prototype.addNewUser = function () {
                this.$uibModal.open({
                    templateUrl: "html/add-user-modal.html",
                    backdrop: "static",
                    controllerAs: "vm",
                    controller: "AddUserModalController"
                });
            };
            UsersListController.$inject = ["$uibModal", "UserManagerService"];
            return UsersListController;
        }());
        controllers.UsersListController = UsersListController;
        angular.module("settings").controller("UsersListController", UsersListController);
    })(controllers = settings.controllers || (settings.controllers = {}));
})(settings || (settings = {}));
