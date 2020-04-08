import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default function Food(props) {
    const classes = useStyles();

  return (
      <>
      
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="./images/RestoBlue.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="secondary" variant="outlined" Link href={"https://www.opentable.com/restref/client/?rid=213331&restref=213331&corrid=99c8037c-c083-4bb5-9bd1-f380e1b90a3e"}>
          RESERVE
        </Button>
      </CardActions>
    </Card>
    </>
  );
}