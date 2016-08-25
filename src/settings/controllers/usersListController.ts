module settings.controllers {
    export class UsersListController {
        users: Array<interfaces.user> = [];
        static $inject: Array<string> = ["$uibModal", "UserManagerService"];
        constructor(private $uibModal: angular.ui.bootstrap.IModalService, private userManagerService: interfaces.userManagerService) {
            this.userManagerService.getAllUsers().then(
                (result) => {
                    angular.copy(result.data, this.users);
                    console.log(this.users);
                }, () => { });
        }
        addNewUser() {
            this.$uibModal.open({
                templateUrl: "html/add-user-modal.html",
                backdrop: "static",
                controllerAs: "vm",
                controller: "AddUserModalController"
            })
        }
    }

    angular.module("settings").controller("UsersListController", UsersListController)
}