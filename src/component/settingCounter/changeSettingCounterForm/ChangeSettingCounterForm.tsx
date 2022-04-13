import React, {ChangeEvent} from 'react';

interface SettingCounterFormProps {
    title: string
    className: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ChangeSettingCounterForm = ({
                                             className,
                                             value,
                                             title,
                                             onChange,
                                         }: SettingCounterFormProps) => {
    return (
        <span>
                    {title}: <input className={className} value={value}
                                    onChange={onChange} type="number"/>
                </span>
    );
};

