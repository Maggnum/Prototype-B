import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import type { SxProps } from "@mui/material";
import type { FC } from "react";

const navbarStyle: SxProps = {
  backgroundColor: "rgba(20, 20, 20, 0.9)",
  backdropFilter: "blur(6px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
};

const toolbarStyle: SxProps = {
  px: 3,
  display: "flex",
  alignItems: "center",
  minHeight: "64px",
};

const iconStyle: SxProps = { fontSize: 28, mr: 1, color: "grey.200" };

const itemStyle: SxProps = {
  mx: 2,
  textDecoration: "none",
  color: "grey.100",
  fontWeight: 500,
  letterSpacing: "0.5px",
  "&:hover": {
    color: "grey.500",
  },
};

export const Navbar: FC = () => {
  return (
    <AppBar position="sticky" elevation={0} sx={navbarStyle}>
      <Toolbar sx={toolbarStyle}>
        <AdsClickIcon sx={iconStyle} />
        <Typography variant="h6" component="a" href="#" sx={itemStyle}>
          Home
        </Typography>{" "}
      </Toolbar>
    </AppBar>
  );
};
