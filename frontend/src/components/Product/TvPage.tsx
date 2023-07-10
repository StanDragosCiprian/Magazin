import { useParams } from "react-router-dom";
import { ITv } from "../../core/entity/ITv";
import { useTakeTvById } from "../../core/class/TakeTvById";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

export const TvPage = () => {
  const { id } = useParams();

  const tv: ITv | undefined = useTakeTvById({ path: id });

  return (
    <>
      <Box display="flex" flexWrap="wrap">
        <Card sx={{ maxWidth: 445, margin: 3 }}>
          <CardMedia
            component="img"
            height="500"
            image={tv?.image}
            alt="green iguana"
          />
        </Card>
        <Box sx={{ marginLeft: "100px", marginTop: "20px" }}>
          <Typography gutterBottom variant="h6" component="div">
            {tv?.name}
          </Typography>

          <Typography gutterBottom component="div" sx={{ maxWidth: 500 }}>
            {tv?.desctiption}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          ></Box>
          <Typography gutterBottom variant="h6" component="div">
            {`Rezolution:${tv?.rezolution}`}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          {`Diameter:${tv?.diameter}`}
          </Typography>
          <Divider sx={{ marginBottom: "10px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center", // Add this line
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontSize: "1.2em", fontWeight: "bold", margin: "0" }}
              component="div"
            >
              {`${tv?.price} ${tv?.currency}`}
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "black",
                marginLeft: "5px",
                width: "250px",
              }}
            >
              BUY
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
