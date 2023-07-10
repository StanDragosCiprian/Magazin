import { ITv } from "../core/entity/ITv";
import Cookies from "js-cookie";
export const handleNewTv = async (tvInput: ITv): Promise<void> => {
  const response = await fetch("http://localhost:3000/tv/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    //credentials: "include",
    body: JSON.stringify(tvInput),
  });
  const data = await response.json();
  // window.location.href = "/";
};
export const getTv = async (): Promise<ITv[]> => {
  let response = await fetch("http://localhost:3000/tv/getAll", {
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
  const response = await fetch(`http://localhost:3000/tv/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },

  });
  const data = await response.json();
  //window.location.href = "/";
};
export const getOneTv = async (tv: string): Promise<ITv> => {
  
  let response = await fetch(
    `http://localhost:3000/tv/${tv}`,
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
  
  let response = await fetch(`http://localhost:3000/tv/${name}`, {
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

