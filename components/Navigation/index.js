import { useState } from "react";

// components
import GuestNavigation from "./guestNavigation";
import UserNavigation from "./userNavigation";

const Navigation = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    
    return (
        <>
        {
        // filter state of users 
        isUserLoggedIn ? 
        <UserNavigation />
        :
        <GuestNavigation />
        }
        </>
    );
}

export default Navigation;