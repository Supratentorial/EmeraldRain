module patient.controllers {
    export class VitalsListController {
        static $inject: Array<string> = ["$state", "PatientShellService", "VitalsService"];
        heartRateConfig = {
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
        bloodPressureConfig = {
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

        }
        chartLabels: Array<string> = [];
        heartRateValues: Array<number> = [];

        isLoading: boolean = false;

        constructor(private $state: angular.ui.IStateService, private patientShellService: interfaces.patientShellService, private vitalsService: interfaces.vitalsService) {
            this.heartRateConfig.xAxis.categories = this.vitalsService.getChartLabels();
            this.heartRateConfig.series[0].data = this.vitalsService.getHeartRateValues();
            console.log(this.heartRateValues);
            console.log(this.chartLabels);
        }

    }
    angular.module("patient").controller("VitalsListController", VitalsListController);
}