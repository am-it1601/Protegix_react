import { Button } from '../ui/button';
import { BellIcon, DotsVerticalIcon } from '@radix-ui/react-icons';

const Header = () => {
    return (
        <header className="w-full shadow-sm bg-primary-foreground">
            <div className="flex items-center justify-between wrapper-navbar">
                <div>
                    <h2 className="h2-bold-16">Demo Company</h2>
                </div>
                <nav className="hidden w-full max-w-xs md:flex-between">
                    {/* <NavItem /> */}
                </nav>
                <div className="flex justify-end w-32 gap-3">
                    {/* Clerk Setup  */}
                    {/* <SignedIn> */}
                    {/* <UserButton afterSignOutUrl="/" />
                        <MobileNav /> */}
                    {/* /* </SignedIn> */}
                    {/* <SignedOut> } */}
                    <Button
                        asChild
                        className="p-2 rounded-full"
                        size="icon"
                        variant="ghost"
                    >
                        <BellIcon />
                    </Button>

                    <Button
                        asChild
                        size="icon"
                        variant="ghost"
                        className="p-2 rounded-full hover:shadow-lg "
                    >
                        <DotsVerticalIcon />
                    </Button>
                    {/* </SignedOut> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
