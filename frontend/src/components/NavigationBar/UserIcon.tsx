import { IconComponents } from "./Icon";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import StoreIcon from "@mui/icons-material/Store";
export const UserIcons = ({ author }: { author: string }) => {
  return (
    <>
      <IconComponents author={author}>
        <StoreIcon sx={{ color: "black" }} />
        <StoreIcon sx={{ color: "black" }} />
      </IconComponents>

      <IconComponents author={author}>
        <AccountCircle sx={{ color: "black" }} />
        <ShoppingCartIcon sx={{ color: "black" }} />
      </IconComponents>

      <IconComponents author={author}>
        <LogoutIcon sx={{ color: "black" }} />
        <LogoutIcon sx={{ color: "black" }} />
      </IconComponents>
    </>
  );
};
