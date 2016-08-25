module settings.services {

    export class UserManagerService implements interfaces.userManagerService{
        static $inject: Array<string> = ["$http"];
        constructor(private $http: angular.IHttpService) {
            
        }

        getAllUsers(): angular.IPromise<any> {
            return this.$http.get("api/users");
        }

        saveNewUser(newUser: interfaces.user) {
            return this.$http.post("api/users", newUser);
        }
    }
    angular.module("settings").service("UserManagerService", UserManagerService);
}