import { Patient, Period, Practitioner } from 'fhir/r4b';

export interface EncounterData {
    id: string;
    patient: Patient | undefined;
    practitioner: Practitioner | undefined;
    status: string;
    period?: Period,
    humanReadableDate: string | undefined;
}
