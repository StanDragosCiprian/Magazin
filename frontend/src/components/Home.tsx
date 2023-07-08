import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import { Clothes } from "../core/class/Clothes";
import { Tv } from "../core/class/Tv";
import { ProductCard } from "./Product Card/ProductCard";
import { KeyObject } from "crypto";

export const Home = () => {
  const tv = Tv();
  const clothes = Clothes();

  console.log(clothes);

  return (
    <>
      <Box display="flex" flexWrap="wrap">
        { clothes?.map((tvVar) => <ProductCard product={tvVar} />)}
        { tv?.map((tvVar) => <ProductCard product={tvVar} />)}
      </Box>
    </>
  );
};
