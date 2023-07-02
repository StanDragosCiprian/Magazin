import { AppBar } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { UserIcons } from "./UserIcon";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export const Navigation = () => {
  const [author, setAuthor] = useState("");
  useEffect(() => {
    const cookies = Cookies.get("id");
    console.log(cookies);
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
          {/* {author === '' ? <UserIcon /> : null} */}
          <Box>
            <UserIcons author={author} />
          </Box>
          <Box>
            {/* {author === '' ? <UserIcon /> : null} */}
            <UserIcons author={author} />
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};
