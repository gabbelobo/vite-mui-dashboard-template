import { useLayoutContext } from "@/contexts/LayoutContext";
import useIsMobile from "@/hooks/useIsMobile";
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

interface Props {
    text: string;
    to: string;
    icon: JSX.Element;
}

const SidebarLink = ({ text, icon, to }: Props) => {
    const isMobile = useIsMobile();
    const { sidebarOpen, setSidebarOpen } = useLayoutContext();
    function handleCloseSidebar() {
        if(!isMobile || !sidebarOpen) return;
        setSidebarOpen(false)
    }
    return (
        <ListItem key={text} disablePadding>
            <ListItemButton href={to} onClick={handleCloseSidebar}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
};
export default SidebarLink;
