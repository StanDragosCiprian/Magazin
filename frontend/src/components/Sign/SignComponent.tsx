import { IUser } from "../../core/entity/IUser";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { handleNewUser } from "../../Server/userQuery";
import { User } from "../../core/class/User";
export const SignComponent = () => {
  const [user, setUser] = useState<IUser>(User);
  const handleUser = (e: string, property: keyof IUser) => {
    setUser((use) => ({ ...use, [property]: e }));
  };

  return (
    <div>
      <Stack spacing={3} direction="column">
        <TextField
          className="outlined-basic"
          label="Name"
          onChange={(e) => handleUser(e.target.value, "name")}
        />

        <TextField
          className="outlined-basic"
          label="Email"
          type="email"
          onChange={(e) => handleUser(e.target.value, "email")}
        />

        <TextField
          className="outlined-basic"
          label="Passworld"
          type="password"
          onChange={(e) => handleUser(e.target.value, "password")}
        />
        <Button variant="contained" onClick={() => handleNewUser(user)}
        sx={{background:'black'}}
        >
          Send
        </Button>
      </Stack>
    </div>
  );
};
