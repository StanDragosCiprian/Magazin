import { IClothes } from "../core/entity/IClothe";
import Cookies from "js-cookie";
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
  let response = await fetch(
    `http://localhost:3000/clothes/${clothesName}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  let responseType = await response.json();
  let data = await responseType;
  return data;
};
export const updateClothes = async (update: IClothes,name:string): Promise<void> => {
  
  let response = await fetch(`http://localhost:3000/clothes/${name}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      
      "Cookie":`${Cookies.get("id")}`
    },
    credentials: "include",
    body: JSON.stringify(update),
  });
  let responseType = await response.json();
  let data = await responseType;
  return data;
};
