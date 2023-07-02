import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { MenuComponent } from "./Menu";
export const IconComponents = ({
  author,
  children,
}: {
  author: string;
  children: React.ReactNode[];
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        {" "}
        {author === "" ? children[0] : children[1]}
      </IconButton>
      {author === "" ? <MenuComponent
        anchorE1={anchorEl}
        path={["/logIn", "/signIn"]}
        buttonName={["Log In", "Sign In"]}
        setAnchorEl={setAnchorEl}
      />:null}
    </>
  );
};
