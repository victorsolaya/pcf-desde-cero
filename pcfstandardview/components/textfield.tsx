import { TextField } from '@fluentui/react';
import * as React from 'react';

const TextFieldComponent = (props: any) => {
    const { label, value } = props;
    return (
        <>
            <TextField label={label} disabled value={value}/>
        </>
    )
}

export default TextFieldComponent;