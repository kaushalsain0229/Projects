import React from 'react';
import { Box, Flex, Text, Image, Grid } from '@chakra-ui/react';

const CashbackCard = () => {
  return (
    <Box p={[4, 6, 8, 10]} bg="white" boxShadow="lg" borderRadius="md" maxW="90%" mx="auto">
      <Text fontWeight="bold" fontSize={["xl", "2xl", "3xl", "4xl"]} mb={6} textAlign="center" color="blue.800">
        DON’T MISS CASH BACK REWARDS
      </Text>
      <Grid templateColumns={["1fr", "1fr", "1fr 1fr", "2fr 1fr"]} gap={6}>
        <Box>
          <Flex mb={4} align="center">
            <Text fontSize={["2xl", "3xl", "4xl", "5xl"]} color="orange.500" fontWeight="bold" mr={2}>4%</Text>
            <Text fontSize={["sm", "md", "lg", "xl"]} color="gray.700">
              ON ELIGIBLE GAS AND EV CHARGING for the first $7,000 per year and then 1% thereafter
            </Text>
          </Flex>
          <Flex mb={4} align="center">
            <Text fontSize={["2xl", "3xl", "4xl", "5xl"]} color="blue.500" fontWeight="bold" mr={2}>3%</Text>
            <Text fontSize={["sm", "md", "lg", "xl"]} color="gray.700">
              ON RESTAURANTS AND ELIGIBLE TRAVEL
            </Text>
          </Flex>
          <Flex mb={4} align="center">
            <Text fontSize={["2xl", "3xl", "4xl", "5xl"]} color="red.500" fontWeight="bold" mr={2}>2%</Text>
            <Text fontSize={["sm", "md", "lg", "xl"]} color="gray.700">
              ON ALL OTHER PURCHASES FROM COSTCO AND COSTCO.COM
            </Text>
          </Flex>
          <Flex mb={4} align="center">
            <Text fontSize={["2xl", "3xl", "4xl", "5xl"]} color="green.500" fontWeight="bold" mr={2}>1%</Text>
            <Text fontSize={["sm", "md", "lg", "xl"]} color="gray.700">
              ON ALL OTHER PURCHASES
            </Text>
          </Flex>
        </Box>
        <Flex justify="center" align="center">
        <Box width={["100%"]}>
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/static-us-landing-pages/citi-card.png" 
              alt="The Costco Anywhere Visa Card by Citi"
              objectFit="contain"
              width="100%"
              height="100%"
            />
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default CashbackCard;
