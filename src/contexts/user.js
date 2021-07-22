import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user: [user, setUser]}}>
            { props.children }
        </UserContext.Provider>
    );
}

//using context provider you can use the {user, ..} user value anywhere in any component.
//you have to just wrap that component with UserContextProvider and then you can use the user value in that component.