import {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useContext,
    useState,
} from "react";

interface LayoutContext {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export const LayoutContext = createContext<LayoutContext | null>(null);

export default function LayoutContextProvider({ children }: PropsWithChildren) {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
    return (
        <LayoutContext.Provider
            value={{
                sidebarOpen,
                setSidebarOpen,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLayoutContext() {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error(
            "useLayoutContext must be used within a LayoutContextProvider",
        );
    }
    return context;
}
