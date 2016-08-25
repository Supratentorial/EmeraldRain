var patient;
(function (patient_1) {
    var services;
    (function (services) {
        "use strict";
        var PatientShellService = (function () {
            function PatientShellService(patientService, demographicsService) {
                this.patientService = patientService;
                this.demographicsService = demographicsService;
                this.openPatients = [];
            }
            PatientShellService.prototype.addPatientToOpenList = function (patient) {
                if (!this.isPatientOpen(patient.patientId)) {
                    this.openPatients.push(patient);
                    patient.fullName = this.demographicsService.getFullNameWithTitle(patient.familyName, patient.givenName, patient.middleNames, patient.title);
                }
            };
            PatientShellService.prototype.removePatientFromOpenList = function (patientId) {
                for (var i; i < this.openPatients; i++) {
                    if (patientId === this.openPatients[i].patientId) {
                        var index = this.openPatients.indexOf(this.openPatients[i]);
                        this.openPatients.splice(index, 1);
                    }
                }
            };
            PatientShellService.prototype.isPatientOpen = function (patientId) {
                for (var i = 0; i < this.openPatients.length; i++) {
                    if (patientId === this.openPatients[i].patientId) {
                        return true;
                    }
                }
                return false;
            };
            PatientShellService.prototype.setCurrentPatient = function (patientId) {
                if (patientId) {
                    for (var i = 0; i < this.openPatients.length; i++) {
                        if (patientId === this.openPatients[i].patientId) {
                            this.currentPatient = this.openPatients[i];
                        }
                    }
                }
            };
            PatientShellService.prototype.saveCurrentPatient = function () {
                var _this = this;
                return this.patientService.updatePatient(this.currentPatient).then(function (result) {
                    angular.copy(result.data, _this.currentPatient);
                    _this.currentPatient.fullName = _this.demographicsService.getFullNameWithTitle(_this.currentPatient.familyName, _this.currentPatient.givenName, _this.currentPatient.middleNames, _this.currentPatient.title);
                });
            };
            PatientShellService.$inject = ["PatientService", "DemographicsService"];
            return PatientShellService;
        }());
        services.PatientShellService = PatientShellService;
        angular.module("patient").service("PatientShellService", PatientShellService);
    })(services = patient_1.services || (patient_1.services = {}));
})(patient || (patient = {}));
