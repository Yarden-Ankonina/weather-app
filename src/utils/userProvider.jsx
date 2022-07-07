import React, { createContext, useContext, useState } from 'react'

export const UserContext = createContext();
export const UserContextUpdate = createContext();

export function useIsUserDayTime(){
    return useContext(UserContext);
}

export function useIsUserDayTimeUpdate(){
    return useContext(UserContextUpdate);
}

export function UserProvider({children}) {
    const [isDayTime, setIsDayTime] = useState(true);

    function updateDayTime(time){
        setIsDayTime(isDayTime = time);
    }

  return (
    <UserContext.Provider value={isDayTime}>
        <UserContextUpdate.Provider value={updateDayTime}>
            {children}
        </UserContextUpdate.Provider>
    </UserContext.Provider>

  )
}
