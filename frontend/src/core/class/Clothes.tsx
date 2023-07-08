import { useEffect, useState } from "react";
import { IClothes } from "../entity/IClothe";
import { getClothes } from "../../Server/clothesQuery";

export const Clothes = () => {
  const [clothes, setClothes] = useState<IClothes[]>();
  useEffect(() => {
    getClothes().then((data) => setClothes(data));
  }, []);
  return clothes;
};
