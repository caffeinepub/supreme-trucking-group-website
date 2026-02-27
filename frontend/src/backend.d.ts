import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ResourcesContent {
    content: string;
    lastUpdated: bigint;
}
export interface FormSubmission {
    name: string;
    permissionGranted: boolean;
    email: string;
    deliveryLocation: string;
    message: string;
    timestamp: bigint;
    phone: string;
    pickupLocation: string;
}
export interface PrivacyPolicy {
    title: string;
    content: string;
    lastUpdated: bigint;
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<FormSubmission>>;
    getPrivacyPolicy(): Promise<PrivacyPolicy | null>;
    getResourcesContent(): Promise<ResourcesContent>;
    submitForm(name: string, email: string, phone: string, pickupLocation: string, deliveryLocation: string, message: string, permissionGranted: boolean): Promise<void>;
}
