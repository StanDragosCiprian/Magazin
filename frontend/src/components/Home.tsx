import { Box } from "@mui/material";
import { Clothes } from "../core/class/Clothes";
import { Tv } from "../core/class/Tv";
import { ProductCard } from "./Product Card/ProductCard";
import { GroupedSelect } from "./Filter";
import { useState } from "react";

export const Home = () => {
  const tv = Tv();
  const clothes = Clothes();
  const [category, setCategory] = useState("All Clothes");
  return (
    <>
      <GroupedSelect tv={tv} clothes={clothes} setCategory={setCategory} />
      <Box display="flex" flexWrap="wrap">
        {category !== "All Clothes"
          ? clothes
              ?.filter((clothesItem: any) => {
                return Object.values(clothesItem).some((value) => {
                  if (
                    typeof value === "string" &&
                    typeof category === "string"
                  ) {
                    const arr = value.split(",");
                    return arr.some((vector: any) => vector === category);
                  }
                  return value === category;
                });
              })
              .map((item) => (
                <ProductCard
                  product={item}
                  path={`/clothes/${item.product_id}`}
                />
              ))
          : clothes?.map((item) => (
              <ProductCard
                product={item}
                path={`/clothes/${item.product_id}`}
              />
            ))}

        {category !== "All Tv"
          ? tv
              ?.filter((tvItem) => {
                return Object.values(tvItem).some(
                  (value) => value === category
                );
              })
              .map((tvVar) => (
                <ProductCard product={tvVar} path={`/tv/${tvVar.product_id}`} />
              ))
          : tv?.map((tvVar) => (
              <ProductCard product={tvVar} path={`/tv/${tvVar.product_id}`} />
            ))}
      </Box>
    </>
  );
};
