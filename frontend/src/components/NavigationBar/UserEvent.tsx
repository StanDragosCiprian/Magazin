import { IconButton } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const sayHi=()=>{
    console.log("Hello");
}
export const UserEvent=()=>{
    return(
        <>
        <IconButton onClick={sayHi}>
        <ShoppingCartIcon />
      </IconButton>
        </>
    );
}