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
    <Card key={index} className="cardcontainer">
            <Card.Img variant="top" src={item.image} className="one" />
            <Card.Body >
              <Card.Title >{item.text} </Card.Title>
              <Card.Text className="two">
              {item.address}
              </Card.Text>
            </Card.Body>
            <Card.Footer className="three">

            <span >{item.room}</span>

              <span>{item.price}</span>
            </Card.Footer>
          </Card>
  );
}