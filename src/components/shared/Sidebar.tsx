import React, { createContext, useContext, useState } from 'react';
import { Button } from '../ui/button';
import { ChevronLeftIcon, DotsVerticalIcon } from '@radix-ui/react-icons';

type SidebarProps = {
    children: React.ReactNode;
};
type SidebarItemProps = {
    name?: string;
    icon?: React.ReactElement;
    alert?: boolean;
    active: boolean;
};
const SidebarContext = createContext({ expanded: true });
const Sidebar: React.FunctionComponent<SidebarProps> = ({ children }) => {
    const [expanded, setexpanded] = useState(true);
    return (
        <aside className="h-screen shadow-sm hover:shadow-lg bg-primary-foreground">
            <nav className="flex flex-col h-full shadow-sm ">
                <div className="gap-2 p-4 flex-between">
                    <img
                        src="https://img.logoipsum.com/330.svg"
                        className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
                        alt="logo"
                    />
                    <Button
                        variant="ghost"
                        className="rounded-lg p-1.5"
                        size="icon"
                        onClick={() => setexpanded(curr => !curr)}
                    >
                        <ChevronLeftIcon className="size-10" />
                    </Button>
                </div>
                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-4">{children}</ul>
                </SidebarContext.Provider>
                <div className="flex gap-3 p-4 border-t flex-between">
                    <img
                        src="https://ui-avatars.com/api/?bold=true"
                        alt="user_picture"
                        className="rounded-md size-10"
                    />
                    <div
                        className={`flex-between overflow-hidden transition-all ${expanded ? 'w-52' : 'w-0'}`}
                    >
                        <div className="flex flex-col justify-center gap-1">
                            <h4 className="p-semibold-16">John Doe</h4>
                            <span className="text-gray-500 p-regular-14">
                                john.doe@gmail.com
                            </span>
                        </div>
                        <Button
                            variant="ghost"
                            className="rounded-lg p-1.5 "
                            size="icon"
                        >
                            <DotsVerticalIcon className="size-6" />
                        </Button>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export const SidebarItem: React.FunctionComponent<SidebarItemProps> = ({
    icon,
    name,
    active = false,
    alert = false,
}) => {
    const { expanded } = useContext(SidebarContext);
    return (
        <li
            className={`relative flex items-center p-4 my-1.5 font-medium leading-4 transition-colors  rounded 
            ${active ? 'bg-foreground/15' : 'hover:bg-foreground/10'} 
            group`}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all p-regular-16 ${expanded ? 'ml-3 w-52' : 'hidden'}`}
            >
                {name}
            </span>
            {alert && (
                <div
                    className={`absolute rounded size-2 bg-primary right-3 ${expanded ? '' : 'top-3'}`}
                ></div>
            )}
            {!expanded && <div className="sidemenu__tooltip">{name}</div>}
        </li>
    );
};

export default Sidebar;
