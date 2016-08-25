module common.services {
    export class Moment {
        static $inject: Array<string> = ["$window"];
        constructor(private $window) {
            return this.$window.moment;
        }
    }
    angular.module("common").service("moment", Moment);
}