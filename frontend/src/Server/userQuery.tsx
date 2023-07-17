import { IUser } from "../core/entity/IUser";
import Cookies from "js-cookie";
import { url } from "./url.enum";

export const handleNewUser = async (userInput: IUser): Promise<void> => {
  const response = await fetch(`${url}users/sign`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });

  const data = await response.json();
  const token = data.access_token; 

  if (token) {
    Cookies.set("id", token, { expires: 7 });
    window.location.href = "/";
  }
};

export const handleLog = async (userInput: IUser): Promise<void> => {
  await fetch(`${url}users/log`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  })
    .then((resp) => resp.json())
    .then((data) => {
      const token = data.access_token;
      if (token) Cookies.set("id", token, { expires: 7 });

      if (data?.message === "User not found.") {
        alert(data?.message);
      } else {
        window.location.href = "/";
      }
    });
};
export const handleUserById = async (): Promise<IUser> => {
  const id: number = Number(Cookies.get("id"));
  const response = await fetch(`${url}users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
export const handleNewOrder = async (name: string): Promise<IUser> => {
  const response = await fetch(`${url}users/newOrder/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: `id=${Cookies.get("id")}`,
    },
  });
  const data = await response.json();
  return data;
};
