module patient.services {
    export class VitalsService implements interfaces.vitalsService {
        static $inject: Array<string> = ["$http", "PatientShellService", "moment"];
        constructor(private $http: angular.IHttpService, private patientShellService: interfaces.patientShellService, private moment: moment.MomentStatic) {

        }

        createNewVitalSigns() {
            return <interfaces.vitalSign>{
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
            }
        }

        getVitalsById(vitalsId: number): interfaces.vitalSign {
            for (var i = 0; i < this.patientShellService.currentPatient.vitalSigns.length; i++) {
                if (vitalsId === this.patientShellService.currentPatient.vitalSigns[i].vitalSignId) {
                    return this.patientShellService.currentPatient.vitalSigns[i];
                }
            }
        }

        getHeartRateValues(): Array<number> {
            var heartRateValues: Array<number> = [];
            if(typeof this.patientShellService.currentPatient.vitalSigns != "undefined")
            for (var i = 0; i < this.patientShellService.currentPatient.vitalSigns.length; i++) {
                if (this.patientShellService.currentPatient.vitalSigns[i].heartRate) {
                    heartRateValues.push(this.patientShellService.currentPatient.vitalSigns[i].heartRate);
                }
            }
            return heartRateValues;
        }

        getChartLabels(): Array<string> {
            var chartLabels: Array<string> = [];
            if (typeof this.patientShellService.currentPatient.vitalSigns != "undefined") {
                for (var i = 0; i < this.patientShellService.currentPatient.vitalSigns.length; i++) {
                    if (this.patientShellService.currentPatient.vitalSigns[i].dateRecorded) {
                        chartLabels.push(this.patientShellService.currentPatient.vitalSigns[i].dateRecorded);
                    }
                }
            }
            return chartLabels;
        }

        saveVitalSigns(vitalSign: interfaces.vitalSign) {
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
        }

    }
    angular.module("patient").service("VitalsService", VitalsService);
}