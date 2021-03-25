import * as React from 'react';
import { PrimaryButton, IIconProps } from '@fluentui/react';
const open: IIconProps = { iconName: 'OpenInNewTab' };

const Lookup = (props: any) => {
    const {label, className, id, entityType} = props;
    function goToRecord() {
        (Xrm.Navigation as any).navigateTo(
            {
            entityName: entityType,
            pageType: "entityrecord",
            formType: 2,
            entityId: id,
            },
            { target: 2, position: 1, width: { value: 80, unit: "%" } },
        );
    }
    return (
       <PrimaryButton text={label} iconProps={open} className={className} onClick={goToRecord}/>
    )
}

export default Lookup;