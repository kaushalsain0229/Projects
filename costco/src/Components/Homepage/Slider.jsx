import React from 'react';
import { Box, Grid, Image } from "@chakra-ui/react";

export default function SimpleImageRow() {
  const images = [
    "https://mobilecontent.costco.com/live/resource/img/24w08143/d_24w08143_Hero_Apple_Watch_Mothers_Day.jpg",
    "https://mobilecontent.costco.com/staging/resource/img/24w06223/d_24w06223_hero_april_mvm_tires.jpg",
    "https://mobilecontent.costco.com/live/resource/img/20240429_EUR_Imgs/20240429_Europe_US_ComHero_D.jpg",
    "https://mobilecontent.costco.com/staging/resource/img/24w08101/d_24w08101_appliances_homepage_hero_v03.jpg",

  ];

  return (
    <Box margin={"10px"}>
      <Grid  templateColumns="repeat(2, 1fr)" justifyContent="center" gap={"5px"} >
        {images.map((src, index) => (
          <Box key={index} >
            <Image src={src} alt={`slider-${index}`} objectFit="cover" />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
