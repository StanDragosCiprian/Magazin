import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
export const MenuComponent = ({
  anchorE1,
  path,
  buttonName,
  setAnchorEl
}: {
  anchorE1: null | HTMLElement;
  path: string[];
  buttonName:string[],
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}) => {

  const handleRedirect = (path: string) => {

    if(typeof path!== "object")
    window.location.href = path;
    setAnchorEl(null);
  };
  return (
    <Menu
      id="menu-appbar"
      anchorEl={anchorE1}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorE1)}
      onClose={handleRedirect}
    >
        {path.map((p,i)=>(
             <MenuItem onClick={() => handleRedirect(p)}>{buttonName[i]}</MenuItem>
        ))}
      {/* <MenuItem onClick={() => handleRedirect("/logIn")}>Log In</MenuItem>

      <MenuItem onClick={() => handleRedirect("/signIn")}>Sign In</MenuItem> */}
    </Menu>
  );
};
