import DashboardIcon from "@mui/icons-material/Dashboard";
import DnsIcon from "@mui/icons-material/Dns";
import InfoIcon from "@mui/icons-material/Info";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const navigation = [
    {
        title: "Main",
        links: [
            {
                path: "/",
                title: "Dashboard",
                icon: <DashboardIcon />,
            },
            {
                title: "Settings",
                path: "/settings",
                icon: <SettingsIcon />,
                children: [
                    {
                        path: "/settings/users",
                        title: "Users",
                        icon: <PeopleIcon />,
                    },
                    {
                        path: "/settings/system",
                        title: "System",
                        icon: <DnsIcon />,
                    },
                ],
            },
        ],
    },
    {
        title: "Info",
        links: [
            {
                path: "/about",
                title: "About",
                icon: <InfoIcon />,
            },
        ],
    },
];

export default navigation;
