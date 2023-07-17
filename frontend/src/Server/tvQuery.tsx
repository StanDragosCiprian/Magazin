import { ITv } from "../core/entity/ITv";
import Cookies from "js-cookie";
import { url } from "./url.enum";
export const handleNewTv = async (tvInput: ITv): Promise<void> => {
  const response = await fetch(`${url}tv/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(tvInput),
  });
  const data = await response.json();
  window.location.href = "/admin";
};
export const getTv = async (): Promise<ITv[]> => {
  let response = await fetch(`${url}tv/getAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let responseType = await response.json();
  let data = await responseType;
  return data;

};
export const deleteTv = async (id:string): Promise<void> => {
  const response = await fetch(`${url}tv/delete/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const data = await response.json();
};
export const getOneTv = async (tv: string): Promise<ITv> => {
  
  let response = await fetch(
    `${url}tv/${tv}`,
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
export const updateTv = async (update: ITv,name:string): Promise<void> => {
  
  let response = await fetch(`${url}tv/${name}`, {
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

