import React from 'react'
import './SingleProduct.scss';
import axios from 'axios';
import {BASE_URL} from '../Utils/constants';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'
import {FaCartPlus} from 'react-icons/fa';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
 
const SingleProduct = () => {
    const param = useParams();
    const [product, setProduct] = useState([]);
    
    useEffect(()=> {
    const getProducts = async () => {
     const res = await axios.get(BASE_URL + `/products/${param.id}`);
     setProduct(res.data);
     
    }
    getProducts();

    },[param.id]);

    const classes = useStyles();
    console.log(product);
    
            return (
                <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={product.image.url}
                    title={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     {product.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                     {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    <FaCartPlus/>
                  </Button>
                </CardActions>
              </Card>
            );
        
    
}

export default SingleProduct