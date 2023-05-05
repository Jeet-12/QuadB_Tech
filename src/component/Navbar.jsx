import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { IconButton, Menu, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from "@mui/icons-material"


const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const isNonMobileDevice = useMediaQuery("(min-width: 1000px)")
  return (
    <Box sx={{}}>
      <AppBar sx={{backgroundColor:"black",position:"fixed"}}>
        <Toolbar sx={{ justifyContent: 'space-between',p: "0 5%" }}>
         <Typography variant="h6" component="div" >
            Movie Booking
          </Typography>
          {isNonMobileDevice?
          <Box sx={{ display: "flex", alignItems: "center",gap: 3}}>
          <Button variant="outlined" sx={{color:"white",borderRadius:"0.3rem"}}><Link style={{color: "#fff",textDecoration: "none" }} to={"/"}>Home</Link></Button>
          <Button variant="contained" sx={{backgroundColor:"yellow",borderRadius:"2rem" }}><Link style={{color:"black",fontWeight: 'bold',textDecoration: "none" }} to={"/book"}>Book Now</Link></Button>
          
          </Box>
          :
          <>
              <IconButton
                sx={{ color: "#fff" }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <Button ><Link style={{color: "black",textDecoration: "none" }} to={"/"}>Home</Link></Button>
          <Button ><Link style={{color:"black",fontWeight: 'bold',textDecoration: "none" }} to={"/book"}>Book Now</Link></Button>
              </Menu>
              </>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar