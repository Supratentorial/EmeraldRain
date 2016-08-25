module interfaces {
    export interface userManagerService {
        saveNewUser(newUser: interfaces.user): angular.IPromise<any>;
        getAllUsers(): angular.IPromise<any>;
    }
}