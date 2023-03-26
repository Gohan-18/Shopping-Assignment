import { Badge, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentSearchedTerm } from "../feature/Product-slice";

const Header = () => {
  const { searchedTerm } = useSelector((state) => state.products);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSearch(e) {
    dispatch(currentSearchedTerm(e.target.value));
  }

  return (
    <>
      <Box
        sx={{
          height: "80px",
          width: "100%",
          backgroundColor: "#219ebc",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: {
            xs: "10px",
            md: "30px",
          },
          //   gap: 5,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        <Box sx={{ pr: "15px" }}>
          <Typography
            onClick={() => navigate("/")}
            sx={{
              color: "#f4f4f4",
              fontWeight: "600",
              fontSize: "25px",
              cursor: "pointer",
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            ONSHOP
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: {
              xs: "5px",
              md: "20px",
            },
          }}
        >
          <input
            id="searchItem"
            placeholder="Search..."
            defaultValue={searchedTerm}
            onChange={handleSearch}
            style={{
              width: "100%",
              padding: "0px 30px 0 30px",
              backgroundColor: "#f4f4f4",
              height: "60%",
              border: "none",
              borderRadius: "30px",
              outline: "none",
              color: "#343a40",
            }}
          />
        </Box>
        <Box>
          <IconButton
            onClick={() => navigate("/cart")}
            sx={{ padding: "15px" }}
          >
            <Badge badgeContent={cartItems?.length} color="error">
              <ShoppingCartOutlinedIcon sx={{ fill: "#f4f4f4" }} />
            </Badge>
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Header;
