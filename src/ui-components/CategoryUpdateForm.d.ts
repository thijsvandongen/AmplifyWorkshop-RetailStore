import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Category } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CategoryUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
    styles?: string[];
};
export declare type CategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    styles?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CategoryUpdateFormOverridesProps = {
    CategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    styles?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: CategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    category?: Category;
    onSubmit?: (fields: CategoryUpdateFormInputValues) => CategoryUpdateFormInputValues;
    onSuccess?: (fields: CategoryUpdateFormInputValues) => void;
    onError?: (fields: CategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CategoryUpdateFormInputValues) => CategoryUpdateFormInputValues;
    onValidate?: CategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CategoryUpdateForm(props: CategoryUpdateFormProps): React.ReactElement;
