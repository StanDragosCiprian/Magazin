import { IUser } from "../core/entity/IUser";
import Cookies from "js-cookie";

export const handleNewUser = async (userInput: IUser): Promise<void> => {
  const response = await fetch("http://localhost:3000/users/sign", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(userInput),
  });
  const data = await response.json();
  console.log(data);
  Cookies.set("id", data);
  window.location.href="/";
};
export const handleLog = async (userInput: IUser) => {
  await fetch("http://localhost:3000/users/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      Cookies.set("id", data);
      window.location.href="/";
    });
};
