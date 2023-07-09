import { IClothes } from "../core/entity/IClothe";
import Cookies from "js-cookie";

export const handleNewClothes = async (
  clothesInput: IClothes
): Promise<void> => {
  const response = await fetch("http://localhost:3000/clothes/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `${Cookies.get("id")}`,
    },
    credentials: "include",
    body: JSON.stringify(clothesInput),
  });
  const data = await response.json();
  console.log(data);
  window.location.href = "/";
};
export const deleteClothes = async (id: string): Promise<void> => {
  const response = await fetch(`http://localhost:3000/clothes/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  //window.location.href = "/";
};
export const getClothes = async (): Promise<IClothes[]> => {
  let response = await fetch("http://localhost:3000/clothes/getAll", {
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
  let response = await fetch(`http://localhost:3000/clothes/${clothesName}`, {
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
  let response = await fetch(`http://localhost:3000/clothes/${name}`, {
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
