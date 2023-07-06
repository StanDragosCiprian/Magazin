import { useState,useEffect } from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

interface SignComponentProps<T> {
  userInputProps: Array<keyof T>;
  buttonName: string;
  SendToServer: (...args: any[]) => Promise<void>;
  productName: any[] | null;
  nameToUpdate:string|null;
}

export const FormComponent = <T extends object>({
  userInputProps,
  buttonName,
  SendToServer,
  productName,
  nameToUpdate,
}: SignComponentProps<T>) => {
  const [user, setUser] = useState<T>({} as T);
  const handleUser = (e: string, property: keyof T) => {
    setUser((use) => ({ ...use, [property]: e }));
  };
  const [userInput] = useState<Array<keyof T>>(userInputProps);
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const t = productName !== null ? Object.keys(productName) : [];
    setKeys(t);
  }, [productName]);
  
  return (
    <div>
      <Stack spacing={3} direction="column">
        <Typography variant="h5">{buttonName}</Typography>
        {userInput.map((user, id:number) => (
          
          <TextField
            className="outlined-basic"
            label={user.toString()}
            type={user === "password" ? user.toString() : undefined}
            onChange={(e) => handleUser(e.target.value, user)}
          />
        ))}

        <Button
          variant="contained"
          onClick={() => {nameToUpdate===null?SendToServer(user):SendToServer(user,nameToUpdate)}}
          sx={{ background: "black" }}
        >
          {buttonName}
        </Button>
      </Stack>
    </div>
  );
};
