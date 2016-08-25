var settings;
(function (settings) {
    var controllers;
    (function (controllers) {
        var SettingsShellController = (function () {
            function SettingsShellController() {
            }
            SettingsShellController.$inject = [];
            return SettingsShellController;
        }());
        controllers.SettingsShellController = SettingsShellController;
        angular.module("settings").controller("SettingsShellController", SettingsShellController);
    })(controllers = settings.controllers || (settings.controllers = {}));
})(settings || (settings = {}));
