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
import { getOneClothesByName } from "../../Server/clothesQuery";
import { handleNewOrder } from "../../Server/userQuery";

export const ClothesPage = () => {
  const { id } = useParams();
  const clothes = useTakeClothesById({ path: id });

  const handleSize = () => {
    if (clothes) {
      const size = Object.values(clothes);
      return size[6].split(",");
    }
    return [];
  };

  const handleProductName = async (name: any) => {
    const clothesTest = handleNewOrder(name).then((data) =>
      console.log(data)
    );
  };
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
        <Box sx={{ marginLeft: "100px", marginTop: "20px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {clothes?.name}
          </Typography>
          <Typography gutterBottom component="div" sx={{ maxWidth: 500 }}>
            {clothes?.desctiption}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {handleSize().map((size: any) => (
              <Button
                variant="contained"
                sx={{
                  background: "black",
                  marginRight: "5px",
                  marginTop: "5px",
                }}
              >
                {size}
              </Button>
            ))}
          </Box>
          <Typography gutterBottom variant="h6" component="div">
            {`${clothes?.color} ${clothes?.style}`}
          </Typography>
          <Divider sx={{ marginBottom: "10px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontSize: "1.2em", fontWeight: "bold", margin: "0" }}
              component="div"
            >
              {`${clothes?.price} ${clothes?.currency}`}
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "black",
                marginLeft: "5px",
                width: "250px",
              }}
              onClick={() => handleProductName(clothes?.name)}
            >
              BUY
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
