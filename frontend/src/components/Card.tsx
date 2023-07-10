import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";

interface FormComp {
  children: JSX.Element;
}
export const FormCard :React.FC<FormComp>= ({ children }) => {
  return (
    <div className="card">
      <Paper elevation={6} sx={{ width: "30%" }}>
        <CardContent>{children}</CardContent>
      </Paper>
    </div>
  );
};
