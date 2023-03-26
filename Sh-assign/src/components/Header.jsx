import { IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

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
          px: "40px",
          gap: 5,
          position: 'fixed',
          top: 0,
          right: 0,
          left: 0
        }}
      >
        <Box sx={{pr: '15px'}} >
            <Typography onClick={() => navigate('/')} sx={{ color: "#f4f4f4", fontWeight: '600', fontSize: '25px', cursor: 'pointer' }}>ONSHOP</Typography>
        </Box>
        <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
          <input
            id="searchItem"
            placeholder="Search..."
            defaultValue=''
            style={{
              width: "100%",
              padding: '0px 30px 0 30px',
              backgroundColor: '#f4f4f4',
              height: '60%',
              border: 'none',
              borderRadius: '30px',
              outline: 'none',
              color: '#343a40',
            }}
          />
        </Box>
        <Box>
          <IconButton onClick={() => navigate('/cart')} sx={{ padding: "15px" }}>
            <ShoppingCartOutlinedIcon sx={{ fill: "#f4f4f4" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default Header;
