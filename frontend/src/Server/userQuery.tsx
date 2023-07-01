import { IUser } from "../core/entity/IUser";
import Cookies from "js-cookie";
document.cookie = 'id=some-value';
export const handleNewUser = async (userInput: IUser): Promise<void> => {
 
  const response = await fetch("http://localhost:3000/users/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
    body: JSON.stringify(userInput),
  });
  const data = await response.json();
  console.log(data);
  // const id = JSON.stringify(data);
  // if (id !== '{"statusCode":500,"message":"Internal server error"}') {
  //   Cookies.set("id", id);
  //   console.log(Cookies.get());
  // } else {
  //   console.log("internal Problem");
  // }
};
export const handleGetUser = async () => {
  await fetch("http://localhost:3000/users/getAll", {
    method: "GET",
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    });
};
