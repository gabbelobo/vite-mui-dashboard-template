import { useLocation } from "react-router-dom";
import { Link, Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import navigation from "@/router/navigation";

type NameMap = Record<string, { title: string; linkable: boolean }>;

const nameMap = navigation.reduce<NameMap>((acc, section) => {
    section.links.forEach((link) => {
        if (link.children) {
            acc[link.path] = { title: link.title, linkable: false };
            link.children.forEach((nestedLink) => {
                acc[nestedLink.path] = {
                    title: nestedLink.title,
                    linkable: true,
                };
            });
        } else {
            acc[link.path] = { title: link.title, linkable: true };
        }
    });
    return acc;
}, {});

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    return (
        <MuiBreadcrumbs
            aria-label="breadcrumb"
            sx={{ color: "primary.contrastText" }}
        >
            <Link href="/" underline="hover" color={"inherit"}>
                Home
            </Link>
            {pathnames.map((_, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const link = nameMap[to];

                return last || !link.linkable ? (
                    <Typography color="inherit" key={to}>
                        {link.title}
                    </Typography>
                ) : (
                    <Link underline="hover" color="inherit" href={to} key={to}>
                        {link.title}
                    </Link>
                );
            })}
        </MuiBreadcrumbs>
    );
};
export default Breadcrumbs;
