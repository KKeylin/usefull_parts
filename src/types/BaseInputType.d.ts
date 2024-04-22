declare type normalizedOnChange = (
    arg0: {
        name: string;
        value: any;
    },
    e?: React.SyntheticEvent,
) => void;

declare interface NormalizedHandleChange {
    normalizedOnChange?: normalizedOnChange;
}

declare type InputType = 'text' | 'email' | 'password' | 'radio' | 'checkbox' | 'number';
declare type ErrorMessageType = string | React.ReactNode;

// Deprecated
declare interface BaseInputType<T> {
    id?: string | any;
    type?: InputType;
    name: string;
    value?: any;
    label?: string;
    readOnly?: boolean;
    requiredMark?: boolean;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    errorMessage?: string;
    onChange: (e: T, item?: Object) => void;
    onBlur?: React.FocusEventHandler;
    autoFocus?: boolean;
    onKeyPress?: (e: React.KeyboardEvent) => void;
    additionalComponent?: Function;
}

declare interface BaseInputProps {
    type?: InputType;
    name: string;
    value: any;
    label?: string;
    readOnly?: boolean;
    requiredMark?: boolean;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    errorMessage?: ErrorMessageType;
    onChange: normalizedOnChange;
    onBlur?: AnyFunction;
    onKeyPress?: (e: React.KeyboardEvent | any) => void;
    id?: string;
    autoComplete?: string;
    inputRef?: any;
    className?: string;
    hideDateLabels?: boolean;
}
