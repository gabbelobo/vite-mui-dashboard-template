import { PropsWithChildren, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

interface Props extends PropsWithChildren {
    text: string;
    icon: JSX.Element;
}

const SidebarSubmenu = ({ text, icon, children }: Props) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {children}
                </List>
            </Collapse>
        </>
    );
};
export default SidebarSubmenu;
