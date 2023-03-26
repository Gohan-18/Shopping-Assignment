import { useTheme } from "@emotion/react";
import {
  Box,
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

const Cart = () => {
  const theme = useTheme();
  const { cartItems } = useSelector((state) => state?.cart);
  const subTotal = getSubTotal(cartItems)?.toFixed(2);
  const dispatch = useDispatch();

  function increaseItem({ product, quantity }) {
    dispatch(addTOCart({ product, quantity }));
  }

  function decreaseItem ({product}) {
    dispatch(removeFromCart({product}))
  }

  return (
    <>
      <Container maxWidth="md" sx={{ my: "80px" }}>
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
                  <Typography sx={{ fontSize: "20px", fontWeight: 500 }}>
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
                    <IconButton onClick={() => decreaseItem({product})}>
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
                  <Typography>
                    Total : ${getSubTotal([{ product, quantity }]).toFixed(2)}
                  </Typography>
                </Box>
              </Card>
            );
          })}
        </Box>

        <Card
          sx={{
            width: "100%",
            px: {
              xs: "30px",
              md: "60px",
            },
            py: "40px",
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between'
        }}
        >
          <Typography sx={{fontSize: '25px', fontWeight: 600}} >Subtotal</Typography>
          <Typography>${subTotal} </Typography>
        </Card>
      </Container>
    </>
  );
};

export default Cart;
