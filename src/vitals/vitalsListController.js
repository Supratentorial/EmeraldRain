var patient;
(function (patient) {
    var controllers;
    (function (controllers) {
        var VitalsListController = (function () {
            function VitalsListController($state, patientShellService, vitalsService) {
                this.$state = $state;
                this.patientShellService = patientShellService;
                this.vitalsService = vitalsService;
                this.heartRateConfig = {
                    options: {
                        chart: {
                            type: 'line'
                        },
                        legend: {
                            enabled: false
                        },
                    },
                    xAxis: {
                        categories: ['1/3/2016', '2/3/2016', '3/3/2016', '4/3/2016', '5/3/2016', '6/3/2016', '7/3/2016', '8/3/2016', '9/3/2016', '10/3/2016', '11/3/2016', '12/3/2016']
                    },
                    series: [{
                            data: [65, 58, 66, 70, 63, 88, 75, 60, 63, 50, 55, 60]
                        }],
                    title: {
                        text: null
                    },
                    loading: false,
                };
                this.bloodPressureConfig = {
                    options: {
                        chart: {
                            type: "bar",
                            inverted: true
                        },
                        legend: {
                            enabled: false
                        },
                    },
                    xAxis: {
                        categories: [],
                        maxPointWidth: 5
                    },
                    series: [{
                            data: []
                        }],
                };
                this.chartLabels = [];
                this.heartRateValues = [];
                this.isLoading = false;
                this.heartRateConfig.xAxis.categories = this.vitalsService.getChartLabels();
                this.heartRateConfig.series[0].data = this.vitalsService.getHeartRateValues();
                console.log(this.heartRateValues);
                console.log(this.chartLabels);
            }
            VitalsListController.$inject = ["$state", "PatientShellService", "VitalsService"];
            return VitalsListController;
        }());
        controllers.VitalsListController = VitalsListController;
        angular.module("patient").controller("VitalsListController", VitalsListController);
    })(controllers = patient.controllers || (patient.controllers = {}));
})(patient || (patient = {}));
