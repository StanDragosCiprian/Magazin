import { UserAuthForm } from "../UserAuthForm";
import  CardContent  from "@mui/material/CardContent";
import Paper from '@mui/material/Paper';
import { IUser } from "../../../core/entity/IUser";
import { handleNewUser } from "../../../Server/userQuery";
import 'E:/Magazin graffino/Docker-Interns/frontend/src/App.css'
export const SignIn = () => {
  return (
    <div
      className="div-card"
    >
      <Paper elevation={6} sx={{width:"30%"}}>
        <CardContent
        >
          <UserAuthForm userInputProps={['name', 'email', 'password'] as Array<keyof IUser>}
          buttonName={"Sign In" as string}
          SendToServer={handleNewUser as (userInput: IUser) => Promise<void>}
          />
        </CardContent>
        </Paper>
    </div>
  );
};
