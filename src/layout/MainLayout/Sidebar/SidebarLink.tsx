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
    return (
        <ListItem key={text} disablePadding>
            <ListItemButton href={to}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
};
export default SidebarLink;
