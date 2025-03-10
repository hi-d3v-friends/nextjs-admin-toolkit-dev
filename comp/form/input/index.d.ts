import { HTMLInputModeAttribute } from "nextjs-tools";
import React, { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, ReactNode } from "react";
type Props = {
    label?: ReactNode;
    className?: string;
    hidden?: boolean;
    children?: ReactNode;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    defaultValue?: string;
    type?: HTMLInputTypeAttribute;
    autoComplete?: HTMLInputAutoCompleteAttribute;
    inputMode?: HTMLInputModeAttribute;
    regexp?: string;
    invalidMessage?: string;
};
export default function ({ label, className, hidden, children, disabled, required, name, defaultValue, type, autoComplete, inputMode, regexp, invalidMessage, }: Props): React.JSX.Element;
export {};
