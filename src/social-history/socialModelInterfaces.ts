module interfaces {
    export interface socialHistory {
        socialHistoryId: number;
        ethnicity: string;
        occupation: string;
        maritalStatus: string;
    }

    export interface smokingHistory {
        smokingStatus: string;
        cigarettesPerDay: string;
        ageSmokingCommenced: number;
        ageSmokingCeased: number;
    }

    export interface alcoholHistory {
        alcoholHistory: number;
        alcoholStatus: string;
        drinksPerDay: string;
    }
    
    export interface drugHistory {
        drugHistoryId: number;

    }
}