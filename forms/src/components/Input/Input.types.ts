export interface InputProps {
    onChange: (value: string) => void;
    inputType: string;
    id: string;
    value: string;
    placeholder?: string;
    required?: boolean;
}