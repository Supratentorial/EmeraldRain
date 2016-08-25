module interfaces.services {

    export interface sessionService {
        getSessionTimeSlots(): interfaces.timeSlot[];

    }

    export interface timeSlotService {
        getTimeSlotHeight(): number;
        zoomIn(): number;
        zoomOut(): number;
    }
}