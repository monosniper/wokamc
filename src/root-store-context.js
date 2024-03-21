import {createContext, useContext} from "react";

export const RootStoreContext = createContext()

export const useStores = () => {
    const context = useContext(RootStoreContext)

    if(context === null) {
        throw new Error("")
    }

    return context;
}