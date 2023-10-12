import { useMediaQuery, useTheme } from "@mui/material";

const useIsMobile = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down("md"));
};
export default useIsMobile;
