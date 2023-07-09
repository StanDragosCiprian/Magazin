import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

interface IProductCard {
  product: any;
  path:string
}
export const ProductCard: React.FC<IProductCard> = ({ product,path }) => {
  return (
    <>
      <Link to={path}>
        <Card sx={{ maxWidth: 245, margin: 3 }}>
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
                {`${product.price} ${product.currency}`}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </>
  );
};
