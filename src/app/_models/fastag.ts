export interface Fastag {
    id: number;
    operator: string;
    name: string;
    vehicleNumber: string;
    amount: number;
    status?: string; // Optional field to indicate the status of the Fastag
    createdAt?: Date; // Optional field to store the creation date
    updatedAt?: Date; // Optional field to store the last update date
}