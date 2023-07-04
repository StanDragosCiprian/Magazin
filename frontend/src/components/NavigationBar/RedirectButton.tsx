import { Button } from "@mui/material";
import { useState } from "react";
interface Ievent{
   pathProps:string[];
   nameProps:string[];
}
export const RedirectButton:React.FC<Ievent> = ({pathProps,nameProps}) => {
  const [path] = useState(pathProps);
  const [name] = useState(nameProps);
  const redirect = (path: string) => {
    window.location.href = path;
  };
  return(
  <>
    {path.map((p,i) => (
      <Button variant="text" onClick={() => redirect(p)} sx={{color:'black'}}>{name[i]}</Button>
    ))}
  </>
  )
};
