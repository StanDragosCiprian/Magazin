import { IUser } from "../core/entity/IUser";
export const handleNewUser = async (userInput: IUser) => {
  const response = await fetch("http://localhost:3000/users/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });
  const data = await response.json();
  console.log(data);
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
