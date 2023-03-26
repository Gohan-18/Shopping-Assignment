import { useTheme } from "@emotion/react";
import { Box, Button, CardMedia, Container, Rating, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const { singleProduct } = useSelector((state) => state?.products);
  const theme = useTheme();
  return (
    <>
    {/* {singleProduct.rating} */}
      <Container
        maxWidth="md"
        sx={{
          py: "100px",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <CardMedia
            component="img"
            image={singleProduct.image}
            alt={singleProduct.title}
            sx={{
                alignSelf: {
                    xs: 'center',
                    md: 'start'
                },
              width: theme.spacing(30),
              height: theme.spacing(30),
              objectFit: "contain",
              py: theme.spacing(3),
            }}
          />
          <Typography sx={{ fontSize: theme.spacing(3), fontWeight: 600 }}>
            {singleProduct.title}
          </Typography>
          <Typography
            sx={{
              pt: theme.spacing(1),
              fontSize: theme.spacing(4),
            }}
          >
           $ {singleProduct.price}
          </Typography>
          <Rating readOnly precision={0.5} value={singleProduct.rating.rate} size='small' />
          <Typography sx={{pt:'20px'}} >{singleProduct.description}</Typography>
          <Typography sx={{pt:'20px',color: '#6c757d' ,fontWeight: '400'}} >Category : <Typography variant='span' sx={{fontWeight: '500', px: '10px', color: '#343a40'}}>{singleProduct.category.toUpperCase()}</Typography></Typography>
          <Typography variant='span' sx={{color: '#6c757d' ,fontWeight: '400'}} >Availability : {singleProduct.rating.count > 0 ? <Typography variant='span' color='#006400' sx={{fontWeight: '500', px: '10px'}} >- In Stock -</Typography> : <Typography variant='span' sx={{fontWeight: '500', px: '10px'}} color='error'>- Out Of Stock -</Typography>}</Typography> 
          <Button variant="contained" sx={{mt: '20px'}} >Add to cart</Button>
        </Box>
      </Container>
    </>
  );
};

export default Product;
