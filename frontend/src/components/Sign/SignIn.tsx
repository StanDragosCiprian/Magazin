import { SignComponent } from "./SignComponent";
import  CardContent  from "@mui/material/CardContent";
import Paper from '@mui/material/Paper';
export const SignIn = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <Paper elevation={6} sx={{width:"30%"}}>
        <CardContent
          
        >
          <SignComponent />
        </CardContent>
        </Paper>
    </div>
  );
};
