import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useLayoutContext } from "@/contexts/LayoutContext";
import useIsMobile from "@/hooks/useIsMobile";
import Header from "./Header";
import Sidebar from "./Sidebar/Sidebar";
import { SIDEBAR_WIDTH } from "./constants";

export default function MainLayout() {
    const { sidebarOpen } = useLayoutContext();
    const isMobile = useIsMobile();

    return (
        <>
            <Sidebar />
            <Box
                sx={{
                    display: "flex",
                    ml: !isMobile && sidebarOpen ? `${SIDEBAR_WIDTH}px` : 0,
                    transition: (theme) =>
                        theme.transitions.create(["margin"], {
                            easing: sidebarOpen
                                ? theme.transitions.easing.easeOut
                                : theme.transitions.easing.sharp,
                            duration: sidebarOpen
                                ? theme.transitions.duration.enteringScreen
                                : theme.transitions.duration.leavingScreen,
                        }),
                }}
            >
                <Header />
                <Box
                    component="main"
                    sx={{
                        p: 3,
                    }}
                >
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}
