import { ITv } from "../core/entity/ITv";

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


