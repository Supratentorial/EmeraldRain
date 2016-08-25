var patient;
(function (patient) {
    var services;
    (function (services) {
        var AllergiesDetailService = (function () {
            function AllergiesDetailService(patientShellService, $http) {
                this.patientShellService = patientShellService;
                this.$http = $http;
                this.allergyReactionTypes = [];
                this.allergySeverityOptions = [];
                this.getAllergySeverityOptions();
                this.getAllergyReactionTypes();
            }
            AllergiesDetailService.prototype.getAllergyById = function (allergyId) {
                if (allergyId) {
                    return this.$http.get("api/patients/" + this.patientShellService.currentPatient.patientId + "/allergies/" + allergyId);
                }
            };
            AllergiesDetailService.prototype.addNewAllergy = function (allergy) {
                if (allergy.allergyId == 0) {
                    return this.$http.post("api/patients/" + this.patientShellService.currentPatient.patientId + "/allergies", allergy);
                }
            };
            AllergiesDetailService.prototype.updateExistingAllergy = function (allergy) {
                if (allergy.allergyId != 0) {
                    return this.$http.put("apie/patients/" + this.patientShellService.currentPatient.patientId + "/allergies", allergy);
                }
            };
            AllergiesDetailService.prototype.deleteAllergy = function (allergyId) {
                //Todo: change allergy status.
            };
            AllergiesDetailService.prototype.getAllergySeverityOptions = function () {
                var _this = this;
                return this.$http.get("api/allergies/valuesets/severity").then(
                //Success
                function (response) {
                    angular.copy(response.data, _this.allergySeverityOptions);
                }, 
                //Failure
                function (error) {
                });
            };
            AllergiesDetailService.prototype.getAllergyReactionTypes = function () {
                var _this = this;
                return this.$http.get("api/allergies/valuesets/reactiontypes").then(
                //Success
                function (response) {
                    angular.copy(response.data, _this.allergyReactionTypes);
                }, 
                //Failure
                function (error) {
                });
            };
            AllergiesDetailService.$inject = ["PatientShellService", "$http"];
            return AllergiesDetailService;
        }());
        services.AllergiesDetailService = AllergiesDetailService;
        angular.module("patient").service("AllergiesDetailService", AllergiesDetailService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
