import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import { getTv } from "../../Server/tvQuery";
import { IProduct } from "../../core/entity/IProduct";

interface IProductCard {
  product: any;
}
export const ProductCard: React.FC<IProductCard> = ({ product }) => {
  return (
    <>
      <Card sx={{ maxWidth: 245, margin: 3}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={product.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {"24 LEI"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
