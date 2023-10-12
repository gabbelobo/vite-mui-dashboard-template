import { Fragment, useEffect } from "react";
import { Box, Divider, Drawer, List, Toolbar } from "@mui/material";
import { useLayoutContext } from "@/contexts/LayoutContext";
import useIsMobile from "@/hooks/useIsMobile";
import navigation from "@/router/navigation";
import { SIDEBAR_WIDTH } from "../constants";
import SidebarLink from "./SidebarLink";
import SidebarSubmenu from "./SidebarSubmenu";

const Sidebar = () => {
    const isMobile = useIsMobile();
    const { sidebarOpen, setSidebarOpen } = useLayoutContext();

    function handleClose() {
        setSidebarOpen(false);
    }

    useEffect(() => {
        setSidebarOpen(!isMobile);
    }, [isMobile, setSidebarOpen]);

    return (
        <Drawer
            variant={isMobile ? "temporary" : "persistent"}
            open={sidebarOpen}
            onClose={handleClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: SIDEBAR_WIDTH,
                },
            }}
        >
            <Box>
                <Toolbar />
                {navigation.map((section) => (
                    <Fragment key={section.title}>
                        <Divider />
                        <List>
                            {section.links.map((link) =>
                                link.children ? (
                                    <SidebarSubmenu
                                        key={link.title}
                                        text={link.title}
                                        icon={link.icon}
                                    >
                                        <List>
                                            {link.children.map((nestedLink) => (
                                                <SidebarLink
                                                    key={nestedLink.path}
                                                    to={nestedLink.path}
                                                    text={nestedLink.title}
                                                    icon={nestedLink.icon}
                                                />
                                            ))}
                                        </List>
                                    </SidebarSubmenu>
                                ) : (
                                    <SidebarLink
                                        key={link.path}
                                        to={link.path}
                                        text={link.title}
                                        icon={link.icon}
                                    />
                                ),
                            )}
                        </List>
                    </Fragment>
                ))}
            </Box>
        </Drawer>
    );
};

export default Sidebar;
