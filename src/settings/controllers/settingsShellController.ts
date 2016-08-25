module settings.controllers {
    export class SettingsShellController {
        static $inject: Array<string> = [];
        constructor() {

        }
    }
    angular.module("settings").controller("SettingsShellController", SettingsShellController);
}