import { Resource } from 'fhir/r4b';

export interface OverviewCard<T extends Resource | Resource[]> {
    title: string;
    key: string;
    icon: React.ReactNode;
    data: T[];
    total?: number;
    columns: {
        key: string;
        title: string;
        render: (r: T) => React.ReactNode;
        width?: string | number;
    }[];
    getKey: (r: T) => string;
}
