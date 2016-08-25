module interfaces {
    export interface vitalSign {
        vitalSignId: number;
        dateRecorded: string;
        temperature: number;
        heartRate: number;
        respiratoryRate: number;
        oxygenSaturation: number;
        systolicBloodPressure: number;
        diastolicBloodPressure: number;
        height: number;
        weight: number;
        bmi: number;
    }

    export interface vitalsService {
        createNewVitalSigns(): interfaces.vitalSign;
        getVitalsById(vitalsId: number): interfaces.vitalSign;
        saveVitalSigns(vitalSign): void;
        getHeartRateValues(): Array<number>;
        getChartLabels(): Array<string>;
    }
}