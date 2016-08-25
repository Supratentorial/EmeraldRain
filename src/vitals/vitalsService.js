var patient;
(function (patient) {
    var services;
    (function (services) {
        var VitalsService = (function () {
            function VitalsService($http, patientShellService, moment) {
                this.$http = $http;
                this.patientShellService = patientShellService;
                this.moment = moment;
            }
            VitalsService.prototype.createNewVitalSigns = function () {
                return {
                    vitalSignId: 0,
                    heartRate: null,
                    respiratoryRate: null,
                    systolicBloodPressure: null,
                    diastolicBloodPressure: null,
                    temperature: null,
                    oxygenSaturation: null,
                    height: null,
                    weight: null,
                    bmi: null,
                    dateRecorded: this.moment().toISOString()
                };
            };
            VitalsService.prototype.getVitalsById = function (vitalsId) {
                for (var i = 0; i < this.patientShellService.currentPatient.vitalSigns.length; i++) {
                    if (vitalsId === this.patientShellService.currentPatient.vitalSigns[i].vitalSignId) {
                        return this.patientShellService.currentPatient.vitalSigns[i];
                    }
                }
            };
            VitalsService.prototype.getHeartRateValues = function () {
                var heartRateValues = [];
                if (typeof this.patientShellService.currentPatient.vitalSigns != "undefined")
                    for (var i = 0; i < this.patientShellService.currentPatient.vitalSigns.length; i++) {
                        if (this.patientShellService.currentPatient.vitalSigns[i].heartRate) {
                            heartRateValues.push(this.patientShellService.currentPatient.vitalSigns[i].heartRate);
                        }
                    }
                return heartRateValues;
            };
            VitalsService.prototype.getChartLabels = function () {
                var chartLabels = [];
                if (typeof this.patientShellService.currentPatient.vitalSigns != "undefined") {
                    for (var i = 0; i < this.patientShellService.currentPatient.vitalSigns.length; i++) {
                        if (this.patientShellService.currentPatient.vitalSigns[i].dateRecorded) {
                            chartLabels.push(this.patientShellService.currentPatient.vitalSigns[i].dateRecorded);
                        }
                    }
                }
                return chartLabels;
            };
            VitalsService.prototype.saveVitalSigns = function (vitalSign) {
                if (vitalSign.vitalSignId === 0) {
                    if (this.patientShellService.currentPatient.vitalSigns === null) {
                        this.patientShellService.currentPatient.vitalSigns = [];
                    }
                    this.patientShellService.currentPatient.vitalSigns.push(vitalSign);
                }
                for (var i = 0; i < this.patientShellService.currentPatient.vitalSigns.length; i++) {
                    if (vitalSign.vitalSignId === this.patientShellService.currentPatient.vitalSigns[i].vitalSignId) {
                        this.patientShellService.currentPatient.vitalSigns[i] = vitalSign;
                    }
                }
            };
            VitalsService.$inject = ["$http", "PatientShellService", "moment"];
            return VitalsService;
        }());
        services.VitalsService = VitalsService;
        angular.module("patient").service("VitalsService", VitalsService);
    })(services = patient.services || (patient.services = {}));
})(patient || (patient = {}));
