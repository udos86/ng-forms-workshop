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
            id: "title",
            label: "Position",
            options: [
                {
                    label: "Mitarbeiter",
                    value: "employee"
                },
                {
                    label: "Teamleiter",
                    value: "team-lead"
                },
                {
                    label: "Abteilungsleiter",
                    value: "department-lead"
                },
                {
                    label: "Hauptabteilungsleiter",
                    value: "main-department-lead"
                },
                {
                    label: "Vorstand",
                    value: "chairman"
                }
            ]
        },
        {
            element: {
                label: "control-label"
            },
            grid: {
                label: "col-sm-2",
                control: "col-sm-5"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "firstName",
            label: "Vorname",
            placeholder: "Vorname",
            validators: {
                required: null
            },
            errorMessages: {
                required: "Field {{id}} is required"
            }
        },
        {
            element: {
                label: "control-label"
            },
            grid: {
                label: "col-sm-2",
                control: "col-sm-10",
                errors: "col-sm-10 col-sm-offset-2"
            }
        }
    ),

    new DynamicInputModel(
        {
            id: "lastName",
            label: "Nachname",
            placeholder: "Nachname",
            validators: {
                required: null
            },
            errorMessages: {
                required: "Field {{id}} is required"
            }
        },
        {
            element: {
                label: "control-label"
            },
            grid: {
                label: "col-sm-2",
                control: "col-sm-10",
                errors: "col-sm-10 col-sm-offset-2"
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
                label: "col-sm-2",
                control: "col-sm-10"
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
                        label: "PLZ",
                        placeholder: "PLZ"
                    },
                    {
                        element: {
                            label: "control-label"
                        },
                        grid: {
                            label: "col-sm-2",
                            control: "col-sm-2"
                        }
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "city",
                        label: "Ort",
                        placeholder: "Ort"
                    },
                    {
                        element: {
                            label: "control-label"
                        },
                        grid: {
                            label: "col-sm-1",
                            control: "col-sm-7"
                        }
                    }
                )
            ]
        }
    ),

    new DynamicCheckboxModel(
        {
            id: "accept",
            label: "Einverstanden"
        },
        {
            grid: {
                control: "col-sm-offset-2 col-sm-10"
            }
        }
    )
]