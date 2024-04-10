import "./CardItem.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
export default function CardItem({
  elementName,
  elementDescription,
  elementImageUrl,
  elementId,
  elementLink,
  linkName,
}) {
  return (
    <Card className="cardItem" id={elementId}>
      <CardMedia
        sx={{ height: 165 }}
        image={elementImageUrl}
        title="category"
      />
      <CardContent>
        <Typography
          sx={{ textAlign: "left" }}
          gutterBottom
          variant="h5"
          component="div"
          className="name"
        >
          {elementName}
        </Typography>
        {elementDescription && (
                  <Typography
                  sx={{ textAlign: "left" }}
                  variant="body2"
                  color="text.secondary"
                  className="description"
                >
                  {elementDescription}
                </Typography>
        )}
      </CardContent>
      <CardActions className="moreInfo">
        <Button size="small">
          <Link
            to={elementLink}
            className="link"
          >
            {linkName}
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
