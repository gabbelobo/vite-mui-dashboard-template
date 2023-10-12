import { forwardRef } from "react";
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
} from "react-router-dom";

const LinkBehavior = forwardRef<
    HTMLAnchorElement,
    Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
>(function CustomLink(props, ref) {
    const { href, ...other } = props;
    // Map href (Material UI) -> to (react-router)
    return <RouterLink ref={ref} to={href} {...other} />;
});

export default LinkBehavior;
