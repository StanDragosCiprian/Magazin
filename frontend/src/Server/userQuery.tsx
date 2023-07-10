import { IUser } from "../core/entity/IUser";
import Cookies from "js-cookie";

export const handleNewUser = async (userInput: IUser): Promise<void> => {
  const response = await fetch("http://localhost:3000/users/sign", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //credentials: "include",
    body: JSON.stringify(userInput),
  });
  const data = await response.json();
  Cookies.set("id", data);
  window.location.href = "/";
};
export const handleLog = async (userInput: IUser): Promise<void> => {
  //const userData = { email: userInput.email, password: userInput.password };
  await fetch("http://localhost:3000/users/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  })
    .then((resp) => resp.json())
    .then((data) => {
      Cookies.set("id", data);
      if (data?.message === "User not found.") {
        alert(data?.message);
      } else {
        window.location.href = "/";
      }
    });
};
