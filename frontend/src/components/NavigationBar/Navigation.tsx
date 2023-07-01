import { AppBar } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { UserIcon } from "./UserIcon";
import Cookies from "js-cookie";
import { useEffect } from "react";
export const Navigation = () => {
  //const [auth, setAuth] = useState(true);
  useEffect(() => {
    console.log(Cookies.get())
  },[]);
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", height: "64px" }}>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "65px" }}
        >
          <UserIcon />
        </Box>
      </Container>
    </AppBar>
  );
};
