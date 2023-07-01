import { IUser } from "../../core/entity/IUser";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { User } from "../../core/class/User";
import { Typography } from '@mui/material';
interface SignComponentProps {
  userInputProps: Array<keyof IUser>;
  buttonName:string
  SendToServer:(userInput: IUser) => Promise<void>;
}
export const UserAuthForm: React.FC<SignComponentProps> = ({userInputProps,buttonName,SendToServer}) => {
  const [user, setUser] = useState<IUser>(User);
  const handleUser = (e: string, property: keyof IUser) => {
    setUser((use) => ({ ...use, [property]: e }));
  };
  const [userInput] = useState<Array<keyof IUser>>(userInputProps);
  return (
    <div>
      <Stack spacing={3} direction="column">
      <Typography variant="h5">{buttonName}</Typography>
        {userInput.map((user) => (
          <TextField
            className="outlined-basic"
            label={user.toString()}
            type={user !== 'name' ? user.toString() : undefined}
            onChange={(e) => handleUser(e.target.value,user )}
          />
        ))}
        
        <Button
          variant="contained"
          onClick={() => SendToServer(user)}
          sx={{ background: "black" }}
        >
         {buttonName}
        </Button>

      </Stack>
    </div>
  );
};
