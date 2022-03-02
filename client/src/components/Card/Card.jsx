import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useContext } from 'react';
import { SocialHouseContext } from '../../Context';

export default function EachCard({item, cb}) {
const {image, setImage} = useContext(SocialHouseContext)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={showCard}>
        <CardMedia
          component="img"
          height="140"
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         {item.address}
          </Typography>
        </CardContent>
        <IconButton
          aria-label="add to favorites"
          onClick={() => cb(item)}
          className={toggled ? "text-danger" : ""}
        >
          <FavoriteIcon fontSize="large" />
        </IconButton>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comment
        </Button>
      </CardActions>
    </Card>
  );
}