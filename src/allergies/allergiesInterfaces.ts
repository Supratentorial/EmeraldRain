module interfaces {
    export interface allergiesDetailService {
        getAllergySeverityOptions(): any;
        getAllergyReactionTypes(): any;

        addNewAllergy(allergy: interfaces.models.allergy): angular.IHttpPromise<any>;
        updateExistingAllergy(allergy: interfaces.models.allergy): angular.IHttpPromise<any>;
        getAllergyById(allergyId: number): angular.IHttpPromise<any>;

        allergySeverityOptions: string[];
        allergyReactionTypes: string[];
    }

    export interface allergiesListService {
        getCurrentPatientAllergies(): void;
    }
}