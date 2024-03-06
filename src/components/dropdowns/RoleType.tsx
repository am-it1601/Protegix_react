import React from 'react';

import { ROLE_TYPE } from '@/lib/constants';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type RoleTypeDropdownProps = {
    onChangeHandler: (value: string) => void;
    value: string | undefined;
};

const RoleType: React.FC<RoleTypeDropdownProps> = ({ onChangeHandler, value }) => {
    return (
        <Select onValueChange={onChangeHandler} value={value || ''}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Role Type" />
            </SelectTrigger>
            <SelectContent>
                {ROLE_TYPE &&
                    Object.entries(ROLE_TYPE).map(([key, label]) => (
                        <SelectItem key={key} value={key} className="select-item ">
                            {label}
                        </SelectItem>
                    ))}
            </SelectContent>
        </Select>
    );
};

export default RoleType;
