module interfaces {
    export interface patientListService {
        getAllPatients(): any;
        searchPatients(searchString : string): any;
    }
}