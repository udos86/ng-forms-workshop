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
        }
    ),

    new DynamicInputModel(
        {
            id: "firstName",
            label: "First Name",
            placeholder: "First Name"
        }
    ),

    new DynamicInputModel(
        {
            id: "lastName",
            label: "Last Name",
            placeholder: "Last Name"
        }
    ),

    new DynamicInputModel(
        {
            id: "email",
            label: "E-Mail",
            placeholder: "E-Mail"
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
                    }
                ),

                new DynamicInputModel(
                    {
                        id: "city",
                        label: "City",
                        placeholder: "City"
                    }
                )
            ]
        }
    ),

    new DynamicCheckboxModel(
        {
            id: "confirm",
            label: "Confirm"
        }
    )
]