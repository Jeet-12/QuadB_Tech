import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useState } from "react";



const BookNowPage = () => {
  const [name, setname] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")

 const handle = () =>{
  localStorage.setItem("name",name);
  localStorage.setItem("email",email);
  localStorage.setItem("password",password);
 }

 return(
  <Box sx={{marginTop:"7rem"}}>
  <Card sx={{ p:4, py:5, maxWidth: "550px", margin: "50px auto", display: "flex", flexDirection: "column", gap: 4, borderRadius: "15px"}} elevation={10}>
    <CardContent sx={{m:0}}>
      <Typography gutterBottom variant="h4" component="div" sx={{m:0,textAlign:"center"}}>
        Book Now!
      </Typography>
    </CardContent>
    <TextField id="outlined-basic" label="name" variant="outlined" type={"text"} name={"name"} onChange={(e)=>{setname(e.target.value)}} />
    <TextField id="outlined-basic" label="email" variant="outlined" type={"email"} name={"email"} onChange={(e)=>{setemail(e.target.value)}} />
    <TextField id="outlined-basic" label="password" variant="outlined" type={"password"} name={"password"} onChange={(e)=>{setpassword(e.target.value)}}/>
    <Button variant='contained' onClick={()=>{handle()}}>Register</Button>
  </Card>
  </Box>
 )
};
export default BookNowPage