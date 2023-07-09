import { useParams } from "react-router-dom";
import { useTakeClothesById } from "../../core/class/TakeClothesById";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { IClothes } from "../../core/entity/IClothe";

export const ClothesPage = () => {
  const { id } = useParams();

  const clothes: IClothes | undefined = useTakeClothesById({ path: id });
  const handleSize = (): string[] => {
    if (clothes !== undefined) {
      const size = Object.values(clothes);
      return size[6].split(",");
    }
    return [];
  };

  console.log(clothes);
  return (
    <>
      <Box display="flex" flexWrap="wrap">
        <Card sx={{ maxWidth: 445, margin: 3 }}>
          <CardMedia
            component="img"
            height="500"
            image={clothes?.image}
            alt="green iguana"
          />
        </Card>
        <Box
          sx={{ textAlign: "center", marginLeft: "100px", marginTop: "20px" }}
        >
          <Typography gutterBottom variant="h6" component="div">
            {clothes?.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {clothes?.desctiption}
          </Typography>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {handleSize().map((size: string) => (
              <Button
                variant="contained"
                sx={{
                  background: "black",
                  marginLeft: "5px",
                  marginTop: "25px",
                }}
              >
                {size}
              </Button>
            ))}
          </Box>
          <Typography gutterBottom variant="h6" component="div">
            {clothes?.style}
          </Typography>

          <Typography gutterBottom variant="h6" component="div">
            {clothes?.color}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {`${clothes?.price} ${clothes?.currency}`}
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "black",
              marginLeft: "5px",
              marginTop: "25px",
              width: "250px",
            }}
          >
            BUY
          </Button>
        </Box>
      </Box>
    </>
  );
};
