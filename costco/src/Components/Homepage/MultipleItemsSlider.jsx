import { Box, SimpleGrid, Text } from "@chakra-ui/react";

function MultipleItems() {
  let arr = [
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1474151-847__1&recipeName=350",
      title: "Yardistry 12' x 14' Contemporary Gazebo with Aluminum Roof",
      Price: "$2,599.99",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1588972-847__1&recipeName=350",
      title:
        "StriVectin Peptide Plump Line Filling Bounce Serum, 1.0 fl oz + 0.5 fl oz",
      Price: "$29.95",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=4000222494-847__1&recipeName=350",
      title: "adidas Youth 2-pack Short",
      Price: "$40.45",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=2127608-847__1&recipeName=350",
      title: "Yardistry 12' x 20' Gazebo with Aluminum Roof",
      Price: "$1200.99",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT01LGBJrKtsANQ-Dyj8FefoJCwXNIB_Hj4pQ&s",
      title: "Macbook Air",
      Price: "$600",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1794498-847__1&recipeName=350",
      title: "Yardistry 12' x 16' Gazebo with Aluminum Roof",
      Price: "$1160.89",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1679163-847__1&recipeName=350",
      title: "adidas Youth Performance Polo and Tee Set",
      Price: "$50.99",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=9077091-847__1&recipeName=350",
      title: "Mackbook Air Pro",
      Price: "$800",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1719026-847__1&recipeName=350",
      title: "Yardistry 12' x 24' Gazebo with Aluminum Roof with Dinning",
      Price: "$1500.92",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1777076-847__1&recipeName=350",
      title: "Yardistry 12' x 24' Gazebo with Aluminum Roof",
      Price: "$2500.40",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1266688-847__1&recipeName=350",
      title: "Yardistry 12' Gazebo Open",
      Price: "$1100",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=4000227662-847__1&recipeName=350",
      title: "Yardistry 12' x 12' Gazebo with Aluminum Roof",
      Price: "$1300",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=1694813-847__1&recipeName=350",
      title: "Sojag Messina Galvanized Steel Roof Gazebo",
      Price: "$2360.99",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100152232-847__1&recipeName=350",
      title: "Sojag Messina Gazebo Steel Roof Gazebo",
      Price: "$2100.99",
    },
    {
      image:
        "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=6262016-847__1&recipeName=350",
      title: "Yardistry 12' x 16' Gazebo with Aluminum Roof",
      Price: "$2500.99",
    },

  ];

  return (
    <Box p={["7", "7", "10", "20"]} pt={[5, 5, 5, 5]} pb={[10, 10, 10, 10]}>
      <Text fontWeight={400} fontSize={"30px"} mb={3} textAlign={"center"}>
        Selected For You
      </Text>

      <SimpleGrid columns={[1, 2, 3, 5]} spacing={5}>
        {arr.map((elem, i) => (
          <Box key={i} cursor={"pointer"} p={5}>
            <Box mb={3}>
              <img src={elem.image} alt="slider" />
            </Box>
            <Text fontSize={"24px"} fontWeight={400}>
              {elem.Price}
            </Text>
            <Text
              fontSize={"16px"}
              fontWeight={400}
              color={"rgb(0, 96, 169)"}
              hover={{ textDecoration: "underline solid rgb(0,96,169)" }}
            >
              {elem.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default MultipleItems;
