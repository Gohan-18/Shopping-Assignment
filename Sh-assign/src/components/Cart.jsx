import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { getSubTotal } from "../utils";
import { addTOCart, removeFromCart } from "../feature/Cart-slice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const theme = useTheme();
  const { cartItems } = useSelector((state) => state?.cart);
  const subTotal = getSubTotal(cartItems)?.toFixed(2);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function increaseItem({ product, quantity }) {
    dispatch(addTOCart({ product, quantity }));
  }

  function decreaseItem({ product }) {
    dispatch(removeFromCart({ product }));
  }

  return (
    <>
      <Container maxWidth="md" sx={{ my: "80px" }}>
        {/* <Box sx={{}} > */}
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "40px",
            },
            fontWeight: 600,
            color: "#6c757d",
            width: "100%",
            textAlign: "center",
            py: "30px",
            borderBottom: "4px solid #6c757d",
          }}
        >
          CART
        </Typography>
        {/* </Box> */}
        {cartItems.length ? (
          <Box sx={{ width: "100%", py: "20px" }}>
            {cartItems.map((item) => {
              const { product, quantity } = item;
              return (
                <Card
                  key={product.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    px: {
                      xs: "10px",
                      md: "30px",
                    },
                    my: "30px",
                    py: "20px",
                  }}
                >
                  <Box sx={{ px: "10px" }}>
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{
                        //   alignSelf: "center",
                        width: theme.spacing(20),
                        height: theme.spacing(20),
                        objectFit: "contain",
                        py: theme.spacing(2),
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 500,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {product.title}{" "}
                    </Typography>
                    <Rating
                      readOnly
                      precision={0.5}
                      value={product.rating.rate}
                      size="small"
                    />
                    <Typography sx={{ color: "#6c757d", fontWeight: "400" }}>
                      Quantity
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        gap: 1,
                      }}
                    >
                      <IconButton onClick={() => decreaseItem({ product })}>
                        <RemoveRoundedIcon sx={{ fontSize: "20px" }} />
                      </IconButton>
                      <Typography sx={{ color: "#6c757d", fontWeight: "400" }}>
                        {quantity}
                      </Typography>
                      <IconButton
                        onClick={() => increaseItem({ product, quantity })}
                      >
                        <AddRoundedIcon sx={{ fontSize: "20px" }} />
                      </IconButton>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "20px",
                        },
                      }}
                    >
                      Total : ${getSubTotal([{ product, quantity }]).toFixed(2)}
                    </Typography>
                  </Box>
                </Card>
              );
            })}
          </Box>
        ) : (
          <Container maxWidth='sm' sx={{display: 'flex', width: '100%', justiftContent: 'center', flexDirection: 'column'}} >
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  sm: "40px",
                },
                fontWeight: 600,
                color: "#6c757d",
                textAlign: "center",
                py: "30px",
              }}
            >{`CART EMPTY :(`}</Typography>
            <Button onClick={() => navigate('/')} variant='contained' >ADD NOW</Button>
          </Container>
        )}

        <Card
          sx={{
            width: "100%",
            px: {
              xs: "30px",
              md: "60px",
            },
            py: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
            Subtotal
          </Typography>
          <Typography>${subTotal} </Typography>
        </Card>
      </Container>
    </>
  );
};

export default Cart;
