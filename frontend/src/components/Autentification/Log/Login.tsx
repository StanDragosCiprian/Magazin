import { UserAuthForm } from "../UserAuthForm";
import  CardContent  from "@mui/material/CardContent";
import Paper from '@mui/material/Paper';
import { IUser } from "../../../core/entity/IUser";
import { handleNewUser } from "../../../Server/userQuery";

export const Login = () => {

  return (
    // <UserAuthForm />
    <div
      className="div-card"
    >
      <Paper elevation={6} sx={{width:"30%"}}>
        <CardContent
        >
          
          <UserAuthForm userInputProps={[ 'email', 'password'] as Array<keyof IUser>}
          buttonName={"Log In" as string}
          SendToServer={handleNewUser as (userInput: IUser) => Promise<void>}
          />
        </CardContent>
        </Paper>
    </div>
  )
};

