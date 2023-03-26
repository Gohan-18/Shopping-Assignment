import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTOCart } from "../feature/Cart-slice";
import { viewSingleProduct } from "../feature/Product-slice";

const ProductCards = ({ allProducts, loading, searchedTerm }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(allProducts);
  const filteredProducts =
    searchedTerm === ""
      ? allProducts
      : allProducts.filter((prod) =>
          prod.title.toLowerCase().includes(searchedTerm.toLowerCase())
        );

  function handleCartItems(product) {
    dispatch(addTOCart({ product, quantity: 1 }));
  }

  function goToProduct(product) {
    dispatch(viewSingleProduct(product));
    navigate(`/product/${product.id}`);
  }

  return (
    <>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: "150",
            height: "80vh",
          }}
        >
          <Typography>Loading...</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: "80",
            py: "40px",
          }}
        >
          <Grid container spacing={3}>
            {filteredProducts.map(
              ({ id, title, image, description, category, rating, price }) => {
                return (
                  <Grid item key={id} xs={12} sm={6} lg={3}>
                    <Card>
                      <CardActionArea
                        onClick={() =>
                          goToProduct({
                            id,
                            title,
                            image,
                            description,
                            category,
                            rating,
                            price,
                          })
                        }
                        sx={{ padding: theme.spacing(2) }}
                      >
                        {/* <Box > */}
                        <CardMedia
                          component="img"
                          image={image}
                          alt={title}
                          sx={{
                            alignSelf: "center",
                            width: theme.spacing(30),
                            height: theme.spacing(30),
                            objectFit: "contain",
                            py: theme.spacing(3),
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: theme.spacing(3),
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "1",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          sx={{
                            pt: theme.spacing(1),
                            fontSize: theme.spacing(2),
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {description}
                        </Typography>
                        <Typography
                          sx={{
                            pt: theme.spacing(1),
                            fontSize: theme.spacing(3),
                          }}
                        >
                          $ {price}
                        </Typography>
                        {/* </Box> */}
                      </CardActionArea>
                      <CardActions>
                        <Button
                          onClick={() =>
                            handleCartItems({
                              id,
                              title,
                              image,
                              description,
                              category,
                              rating,
                              price,
                            })
                          }
                          variant="contained"
                          sx={{ width: "100%" }}
                        >
                          Add to cart
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              }
            )}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default ProductCards;
