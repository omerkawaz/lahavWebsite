import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

interface ICard {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth: 300,
    margin: 15,
  },
  media: {
    height: 200,
  },
  content: {
    height: 150,
    
  },
});

export default function MediaCard({
  title,
  description,
  image,
  onClick,
}: ICard) {
  const classes = useStyles();

  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Heebo'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily: 'Heebo'}}>
            {description}
          </Typography>
          {/* <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              color: "#7ba699",
              fontWeight: "bold",
              marginTop: "15px",
            }}
          >
            קרא עוד...
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
