import { useEffect, useState } from "react";
import { getOneClothes } from "../../Server/clothesQuery";
import { IClothes } from "../entity/IClothe";

export const useTakeClothesById = ({
  path,
}: {
  path: string | undefined;
}): IClothes | undefined => {
  const [clothes, setClothes] = useState<IClothes | undefined>();
  useEffect(() => {
    if (path !== undefined) {
      getOneClothes(path).then((data) => {
        setClothes(data);
      });
    }
  }, []);
  return clothes;
};
