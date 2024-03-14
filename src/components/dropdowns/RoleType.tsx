import React from 'react';
import { ROLE_TYPE as ROLE_TYPE_ENUM } from 'types';

import { ROLE_TYPE } from '@/lib/constants';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

type RoleTypeDropdownProps = {
    onChangeHandler: (value: string) => void;
    value: ROLE_TYPE_ENUM;
};

const RoleType: React.FC<RoleTypeDropdownProps> = ({ onChangeHandler, value }) => {
    return (
        <Select onValueChange={onChangeHandler} defaultValue={value} value={value || ''}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Role Type" />
            </SelectTrigger>
            <SelectContent>
                {ROLE_TYPE &&
                    Object.entries(ROLE_TYPE).map((entry) => (
                        <SelectItem key={entry[0]} value={entry[0]} className="select-item ">
                            {entry[1]}
                        </SelectItem>
                    ))}
            </SelectContent>
        </Select>
    );
};

export default RoleType;
