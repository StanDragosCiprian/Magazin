import { AppBar, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { RedirectButton } from "./RedirectButton";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { isAdmin } from "../Admin/verifyAdmin";
export const Navigation = () => {
  const [author, setAuthor] = useState("");
  const logOutEvent = () => {
    Cookies.remove("id");
    setAuthor("");
    window.location.href='/';
  };
  useEffect(() => {
    const cookies = Cookies.get("id");
    if (cookies) setAuthor(cookies);
  }, []);
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", height: "64px" }}>
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ height: "65px" }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            FashioNet
          </Typography>
          ;<Box></Box>
          <Box>
            {isAdmin() && (
              <RedirectButton
                pathProps={["/admin"]}
                nameProps={["Admin"]}
              />
            )}
            {/* {author === '' ? <UserIcon /> : null} */}
            <RedirectButton pathProps={["/"]} nameProps={["Home"]} />
            {author === "" ? (
              <RedirectButton
                pathProps={["/login", "/signin"]}
                nameProps={["Log In", "Sign In"]}
              />
            ) : (
              <Badge badgeContent={4} color="error">
                <RedirectButton pathProps={["/"]} nameProps={["Shopping"]} />
              </Badge>
            )}
            {author !== "" ? (
              <Button
                variant="text"
                onClick={logOutEvent}
                sx={{ color: "black" }}
              >
                LOG OUT
              </Button>
            ) : null}
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
