import * as React from 'react'
import { FieldForm } from '../utilities/interfaces';
import TextFieldComponent from './textfield'
const FormComponent = (props: any) => {
    const { arrayFields, record } = props;
    return (
       <div className="form">
        {arrayFields.map((field: FieldForm) => {
            const label = field.DisplayName;
            const value = record.getFormattedValue(field.Name);
            return <TextFieldComponent label={label} value={value} />
        })}
       </div>
   )
}

export default FormComponent;