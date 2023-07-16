import { IClothes } from "../core/entity/IClothe";
import Cookies from "js-cookie";
import { url } from "./url.enum";

export const handleNewClothes = async (
  clothesInput: IClothes
): Promise<void> => {
  const response = await fetch(`${url}clothes/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `${Cookies.get("id")}`,
    },
    credentials: "include",
    body: JSON.stringify(clothesInput),
  });
  const data = await response.json();
  window.location.href = "/admin";
};
export const deleteClothes = async (id: string): Promise<void> => {
  console.log(id);
  const response = await fetch(`${url}clothes/delete/${id}`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", 
  });
  const data = await response.json();
};

export const getClothes = async (): Promise<IClothes[]> => {
  let response = await fetch(`${url}clothes/getAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      
    },
  });
  let responseType = await response.json();
  let data = await responseType;
  return data;
};
export const getOneClothes = async (clothesName: string): Promise<IClothes> => {
  let response = await fetch(`${url}clothes/${clothesName}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let responseType = await response.json();
  let data = await responseType;
  return data;
};
export const updateClothes = async (
  update: IClothes,
  name: string
): Promise<void> => {
  let response = await fetch(`${url}clothes/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      Cookie: `${Cookies.get("id")}`,
    },
    credentials: "include",
    body: JSON.stringify(update),
  });
  let responseType = await response.json();
  let data = await responseType;
  return data;
};

export const getOneClothesByName=async (name:string):Promise<IClothes>=>{
  let response = await fetch(`${url}clothes/get/${name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let responseType = await response.json();
  let data = await responseType;
  return data;
};
