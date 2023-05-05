
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
const BookPage = () => {
  const API = `https://api.tvmaze.com/search/shows?q=all`;

  const navigate = useNavigate();
 
  const [data, setData] = useState([]);
  

  const fetchApi = async (url) => {
    try {
      const res = await fetch(url);
      const jso = await res.json();
      console.log(jso);
      setData(jso);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi(API);
  }, []);

  const navig = ()=>{
    navigate('/');
  }
  const handleBookNow = () => {
    navigate('/booking')
   
  };


  return (
    
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
          {Array.from(data).map((item) => (
    <Grid item xs={2} sm={4} md={4} key={item.score}>
      
          
          
           <Card sx={{marginTop:"4rem"}} elevation={8}>
              <CardActionArea sx={{maxHeight:"30rem"}}>
              { item.show.image ?
                <CardMedia
                  component="img"
                  sx={{maxHeight:"20rem",objectFit:"contain",width:"100%"}}                  
                  image={item.show.image.original}
                  elevation={5}
                  alt="green iguana"
                   />
                   :
                   <CardMedia
                  component="img"
                  sx={{maxHeight:"20rem",objectFit:"contain",width:"100%"}}  
                  elevation={5}
                  image="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                 alt="No image found"
                   />}

                <CardContent>
                <Box sx={{textAlign:"center"}}>
                
                <Rating name="disabled" value={(item.show.rating.average/2)} disabled />
                
                </Box>
                  <Typography gutterBottom variant="h5" component="div" sx={{textAlign:"center"}}>
                    {item.show.name}
                  </Typography>
                  <Box sx={{display:"flex",justifyContent:"space-around"}}>
                  <Typography  variant="body2" component="div" >
                  Genres:-
                    {item.show.genres}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  RunTime :- {item.show.runtime ? item.show.runtime:0}
                  </Typography>
                  </Box>
                  <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"0.2rem"}}>
                  <Button variant="outlined" onClick={() =>navig(item.show.summary)} sx={{color:"black",fontWeight: 'bold'}}>Details</Button>
                  <Button variant="outlined" sx={{color:"red",fontWeight: 'bold'}} onClick={()=>{
                    handleBookNow();}}>Book Now</Button>
                  </Box>
                </CardContent>
              </CardActionArea>
              </Card>
           
        </Grid>
        ))}
        </Grid>
  
  );
  
   
};
export default BookPage