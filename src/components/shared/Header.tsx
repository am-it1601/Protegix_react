import { BellIcon, DotsVerticalIcon } from '@radix-ui/react-icons';

import { Button } from '../ui/button';
import { ModeToggle } from '../provider/ToggleTheme';

const Header = () => {
    return (
        <header className="w-full border-b drop-shadow-xl border-input bg-background">
            <div className="flex items-center justify-between wrapper-navbar">
                <div>
                    <h2 className="h2-bold-16 text-primary">Demo Company</h2>
                </div>
                <nav className="hidden w-full max-w-xs md:flex-between">{/* <NavItem /> */}</nav>
                <div className="flex justify-end w-32 gap-3">
                    {/* Clerk Setup  */}
                    {/* <SignedIn> */}
                    {/* <UserButton afterSignOutUrl="/" />
                        <MobileNav /> */}
                    {/* /* </SignedIn> */}
                    {/* <SignedOut> } */}
                    <ModeToggle />
                    <Button asChild className="p-2 rounded-full" size="icon" variant="ghost">
                        <BellIcon />
                    </Button>

                    <Button asChild size="icon" variant="ghost" className="p-2 rounded-full hover:shadow-lg ">
                        <DotsVerticalIcon />
                    </Button>
                    {/* </SignedOut> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
