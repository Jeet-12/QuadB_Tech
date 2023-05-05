
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
const Home = () => {
  const API = `https://api.tvmaze.com/search/shows?q=all`;


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
                  <Typography variant="body2" color="text.secondary">
                   {item.show.summary.length <= 100 ? data.title: (item.show.summary.substr(0, 100) + "...")}
                  </Typography>
                </CardContent>
              </CardActionArea>
              </Card>
           
        </Grid>
        ))}
        </Grid>
  
  );
  
   
};
export default Home