import { useParams } from "react-router-dom";
import { ITv } from "../../core/entity/ITv";
import { useTakeTvById } from "../../core/class/TakeTvById";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";

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
        <Box
          sx={{ textAlign: "center", marginLeft: "100px", marginTop: "20px" }}
        >
        
            <Typography gutterBottom variant="h6" component="div">
              {tv?.name}
            </Typography>
            {/* <Typography gutterBottom variant="h6" component="div">
              {tv?.desctiption}
            </Typography> */}
            <Typography gutterBottom variant="h6" component="div">
              {tv?.diameter}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {tv?.rezolution}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {`${tv?.price} ${tv?.currency}`}
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
