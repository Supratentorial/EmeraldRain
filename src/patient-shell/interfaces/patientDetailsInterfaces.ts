module interfaces {
    export interface patientService {
        createNewPatient(): interfaces.patient;
        getPatientById(patientId: number): angular.IPromise<any>;
        saveNewPatient(newPatient: interfaces.patient): angular.IPromise<any>;
        updatePatient(updatedPatient: interfaces.patient): angular.IPromise<any>;
        searchPatients(searchTerm: string): angular.IPromise<any>;
    }

    export interface patientShellService {
        openPatients: interfaces.patient[];
        currentPatient: interfaces.patient;
        isPatientOpen(patientId: number): boolean;
        setCurrentPatient(patientId: number): void;
        removePatientFromOpenList(patientId: number): void;
        addPatientToOpenList(patientId: number): void;
        saveCurrentPatient(): angular.IPromise<any>;
    }
}