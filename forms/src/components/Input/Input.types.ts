export interface InputProps {
    onChange: (name: string, value: string) => void;
    inputType: string;
    id: string;
    value: string;
    placeholder?: string;
    required?: boolean;
}