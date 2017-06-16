import {
    DynamicFormControlModel,
    DynamicSelectModel,
    DynamicInputModel,
    DynamicFormGroupModel,
    DynamicCheckboxModel
} from "@ng2-dynamic-forms/core";

export const FORM_MODEL: DynamicFormControlModel[] = [

    new DynamicSelectModel(
        {
            id: "degree",
            label: "Degree",
            options: [
                {
                    label: "Bachelor of Arts (B.A.)",
                    value: "BA"
                },
                {
                    label: "Bachelor of Science (B.S.)",
                    value: "BS"
                },
                {
                    label: "Master of Arts (M.A.)",
                    value: "MA"
                },
                {
                    label: "Master of Science (M.S.)",
                    value: "MS"
                },
                {
                    label: "Doctor of Philosophy (Ph.D.)",
                    value: "PhD"
                }
            ]
        },
        {
            element: {
                label: "control-label"
            },
            grid: {
                label: "col-sm-3",
                control: "col-sm-5"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "firstName",
            label: "First Name",
            placeholder: "First Name",
            validators: {
                required: null
            },
            errorMessages: {
                required: "Field {{ id }} is required"
            }
        },
        {
            element: {
                label: "control-label"
            },
            grid: {
                label: "col-sm-3",
                control: "col-sm-9",
                errors: "col-sm-9 col-sm-offset-3"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "lastName",
            label: "Last Name",
            placeholder: "Last Name",
            validators: {
                required: null,
                customForbiddenValidator: "Trump"
            },
            errorMessages: {
                required: "Field is required",
                forbidden: "Current value of field is forbidden"
            }
        },
        {
            element: {
                label: "control-label"
            },
            grid: {
                label: "col-sm-3",
                control: "col-sm-9",
                errors: "col-sm-9 col-sm-offset-3"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "email",
            label: "E-Mail",
            placeholder: "E-Mail"
        },
        {
            element: {
                label: "control-label"
            },
            grid: {
                label: "col-sm-3",
                control: "col-sm-9"
            }
        }
    ),

    new DynamicFormGroupModel(
        {
            id: "address",
            group: [
                new DynamicInputModel(
                    {
                        id: "zipCode",
                        label: "Zip Code",
                        placeholder: "ZIP"
                    },
                    {
                        element: {
                            label: "control-label"
                        },
                        grid: {
                            label: "col-sm-3",
                            control: "col-sm-2"
                        }
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "city",
                        label: "City",
                        placeholder: "City"
                    },
                    {
                        element: {
                            label: "control-label"
                        },
                        grid: {
                            label: "col-sm-1",
                            control: "col-sm-6"
                        }
                    }
                )
            ]
        }
    ),

    new DynamicCheckboxModel(
        {
            id: "confirm",
            label: "Confirm"
        },
        {
            grid: {
                control: "col-sm-offset-3 col-sm-10"
            }
        }
    )
]