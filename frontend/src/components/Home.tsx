import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { useState } from "react";
import { Clothes } from "../core/class/Clothes";
import { Tv } from "../core/class/Tv";
import { ProductCard } from "./Product Card/ProductCard";
import { KeyObject } from "crypto";

export const Home = () => {
  const tv = Tv();
  const clothes = Clothes();
  const [isClothes, setIsClothes] = useState(false);
  const [isTv, setIsTv] = useState(false);
  const [isFilterTv, setIsFilterTv] = useState(false);
  const tvUserInputProps = ["diameter", "rezolution"];
  const clothesUserInputProps = ["size", "style", "color"];

  // Create a state for the selected filter
  const [selectedFilter, setSelectedFilter] = useState("");

  // Create a function to handle the filter change
  const handleFilterChange = (e:any) => {
    setSelectedFilter(e.target.textContent);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" component="h1" sx={{ margin: 3 }}>
          Name
        </Typography>

        <ButtonGroup
          variant="outlined"
          aria-label="outlined button group"
          sx={{ padding: 2, color: "black" }}
        >
          {isFilterTv && isTv &&
            tvUserInputProps.map((key) => (
              <Button
                sx={{ color: "black", borderColor: "black" }}
                onClick={handleFilterChange} // Add an onClick handler for each filter button
              >
                {key}
              </Button>
            ))}
          {isFilterTv && isClothes &&
            clothesUserInputProps.map((key) => (
              <Button
                sx={{ color: "black", borderColor: "black" }}
                onClick={handleFilterChange} // Add an onClick handler for each filter button
              >
                {key}
              </Button>
            ))}
          <Button
            sx={{ color: "black", borderColor: "black" }}
            onClick={() => setIsFilterTv(!isFilterTv)}
          >
            Filter
          </Button>
          <Button
            sx={{ color: "black", borderColor: "black" }}
            onClick={() => setIsTv(!isTv)}
          >
            Tv
          </Button>
          <Button
            sx={{ color: "black", borderColor: "black" }}
            onClick={() => setIsClothes(!isClothes)}
          >
            Clothes
          </Button>
        </ButtonGroup>
      </Box>

      <Box display="flex" flexWrap="wrap">
        {isClothes &&
          clothes
            ?.filter((item: any) => item[selectedFilter]) // Filter the clothes by the selected filter
            .map((tvVar) => <ProductCard product={tvVar} />)}
        {isTv &&
          tv
            ?.filter((item: any) => item[selectedFilter]) // Filter the tv by the selected filter
            .map((tvVar) => <ProductCard product={tvVar} />)}
      </Box>
    </>
  );
};
