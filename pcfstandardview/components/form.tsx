import * as React from 'react'
import { FieldForm } from '../utilities/interfaces';
import Lookup from './lookup';
import TextFieldComponent from './textfield'

const FormComponent = (props: any) => {
    const { arrayFields, record } = props;
    const id = record.getNamedReference().id;
    const entityType = record.getNamedReference().entityType;
    return (
       <div className="form">
        <Lookup label="Ir al registro" className="mb-2" id={id} entityType={entityType}/>
        {arrayFields.map((field: FieldForm) => {
            const label = field.DisplayName;
            const value = record.getFormattedValue(field.Name);
            return <TextFieldComponent label={label} value={value} />
        })}
       </div>
   )
}

export default FormComponent;