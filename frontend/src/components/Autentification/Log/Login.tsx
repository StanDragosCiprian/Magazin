import { FormComponent } from "../../FormComponent";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import { IUser } from "../../../core/entity/IUser";
import { handleNewUser, handleLog } from "../../../Server/userQuery";
import { FormCard } from "../../Card";

export const Login = () => {
  return (
    // <UserAuthForm />
    <FormCard>
      <FormComponent
        userInputProps={["email", "password"] as Array<keyof IUser>}
        buttonName={"Log In" as string}
        SendToServer={handleLog as (userInput: IUser) => Promise<void>}
        productName={null}
        nameToUpdate={null}

      />
    </FormCard>
  );
};
