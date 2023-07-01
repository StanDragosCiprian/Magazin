import { AppBar } from "@mui/material";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
export const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container>
        <Toolbar disableGutters/>
      </Container>
    </AppBar>
  );
};
