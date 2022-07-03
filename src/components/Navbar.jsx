import { Pets } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    display:"none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex", 
    }
}))
const UserBox= styled(Box)(({ theme }) => ({
    display:"flex",
    gap: "10px",
    alignItems: "center" ,
    [theme.breakpoints.up("sm")]:{
        display: "none", 
    }
}))
const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (
        <AppBar position="sticky" sx={{width:"100vw"}}>
            <StyledToolbar>
                <Typography variant='h5' sx={{ display: { xs: 'none', sm: "block" } }}>mKankit</Typography>
                <Pets sx={{ display: { xs: 'none', sm: "none" } }} />
                <Search><InputBase placeholder="Search..."></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon  />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications  />
                    </Badge>
                    <Avatar sx={{width:30 ,height:30}} alt="Travis Howard" onClick={e=>setOpen(true)} src="https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </Icons>
                <UserBox onClick={e=>setOpen(true)} >
              <Avatar sx={{width:30 ,height:30}} alt="Travis Howard" src="https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              <Typography variant="span">ankit </Typography>
              </UserBox>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={e=>setOpen(false)} >Profile</MenuItem>
        <MenuItem  onClick={e=>setOpen(false)}>My account</MenuItem>
        <MenuItem  onClick={e=>setOpen(false)}>Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}

export default Navbar
