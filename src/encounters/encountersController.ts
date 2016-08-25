module patient.controllers {
    export class EncountersController {
        static $inject = ["EncountersService"];
        constructor() {

        }


    }
    angular.module("patient").controller("EncountersController", EncountersController);
}