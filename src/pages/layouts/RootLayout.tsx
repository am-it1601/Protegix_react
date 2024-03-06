import React from 'react';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@radix-ui/react-select';

const RootLayout = () => {
    return (
        <Select>
            <SelectTrigger className="w-full p-4 border shadow-sm border-input">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>

            <SelectContent position="item-aligned" className="bg-primary" side="bottom">
                <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem className="" value="apple">
                        Apple
                    </SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default RootLayout;
