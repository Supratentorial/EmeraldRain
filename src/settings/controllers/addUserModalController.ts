module settings.controllers {
    export class AddUserModalController {

        newUser: interfaces.user;
        static $inject: Array<string> = ["$uibModalInstance", "UserManagerService"];
        constructor(private $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance, private userManagerService: interfaces.userManagerService) {

        }

        saveNewUser() {
            this.userManagerService.saveNewUser(this.newUser).then(() => { }, () => { }).finally(() => {
                this.$uibModalInstance.dismiss();
            });
        }

        cancelAddUser() {
            this.$uibModalInstance.dismiss();
        }
    }
    angular.module("settings").controller("AddUserModalController", AddUserModalController);
}