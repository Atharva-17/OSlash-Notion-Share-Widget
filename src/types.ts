export type AccessStateType = "Full access" | "Can edit" | "Can view" | "No access";

export type InputViewState = "focused" | "blur";

export interface SampleData {
    name: string;
    type: string;
    details?: string;
    imgSrc?: string;
    permission?: AccessStateType;
}