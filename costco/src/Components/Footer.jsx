import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box mt={5}>
      <Box p={[6, 6, 16, 20]} pb={["5", "5", "5", "5"]} bg={"#EEEEEE"}>
        <SimpleGrid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(5,1fr)",
          ]}
          gap={12}
        >
          <Box style={{ color: "teal" }} display={["none", "none", "none", "block"]}>
            <Text fontSize={"20px"} fontWeight={400}>
              Customer Service
            </Text>
            <Text>Get Help?</Text>
          </Box>

          <Box style={{ color: "teal" }} display={["none", "none", "block", "block"]}>
            <Text fontSize={"20px"} fontWeight={400}>
              Find a Warehouse
            </Text>
            <Input
              placeholder="City, state or zip"
              border={"1px solid rgba(0,0,0,0.3)"}
              borderRadius={"none"}
            />
          </Box>

          <Box style={{ color: "teal" }}>
            <Text fontSize={"20px"} fontWeight={400}>
              Get Email Offers
            </Text>
            <Flex>
              <Input
                placeholder="Enter your email"
                border={"1px solid rgba(0,0,0,0.3)"}
                borderRadius={"none"}
              />
              <Button
                bg={"#065FA4"}
                borderRadius={"none"}
                color={"white"}
                _hover={{ color: "black", backgroundColor: "#EEEEEE" }}
              >
                Go
              </Button>
            </Flex>
          </Box>

          <Box style={{ color: "teal" }} display={["none", "none", "none", "block"]}>
            <Text fontSize={"20px"} fontWeight={400}>
              Follow Us
            </Text>
            <SimpleGrid gridTemplateColumns={"repeat(3,1fr)"} w={"50%"} gap={3} mt={2}>
              <Box cursor={"pointer"} w={8}>
                <Link to={"https://www.facebook.com/Costco/"} target="_blank">
                  <img
                    src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-facebook.svg"
                    alt=""
                    width={"100%"}
                  />
                </Link>
              </Box>

              <Box cursor={"pointer"} w={8}>
                <Link to={"https://in.pinterest.com/costco/"} target="_blank">
                  <img
                    src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-pinterest.svg"
                    alt=""
                    width={"100%"}
                  />
                </Link>
              </Box>

              <Box cursor={"pointer"} w={8}>
                <Link to={"https://www.instagram.com/costco/"} target="_blank">
                  <img
                    src="https://www.costco.com/wcsstore/RWDStaticAssets/fonts/fallback-icons/icons/social-instagram.svg"
                    alt=""
                    width={"100%"}
                  />
                </Link>
              </Box>
            </SimpleGrid>
          </Box>

          <Box style={{ color: "teal" }} display={["none", "none", "none", "block"]}>
            <Text fontSize={"20px"} fontWeight={400}>
              Get the Costco App
            </Text>
            <Box cursor={"pointer"} w={8} mt={2}>
              <Link
                to={
                  "https://play.google.com/store/apps/details?id=com.costco.app.android&hl=en&gl=US"
                }
                target="_blank"
              >
                <img
                  src="https://mobilecontent.costco.com/live/resource/img/static-folder-app-icon/app-icon.png"
                  alt=""
                />
              </Link>
            </Box>
          </Box>
        </SimpleGrid>

        <Divider
          border={"1px solid #DDDDDD"}
          m={5}
          display={["none", "none", "block", "block"]}
        />

        <SimpleGrid
          justifyContent={"center"}
          gridTemplateColumns={"repeat(4,1fr)"}
          display={["none", "none", "grid", "grid"]}
          gap={30}
          cursor={"pointer"}
        >
          <SimpleGrid textAlign={"left"} fontWeight={400}>
            <Box style={{ color: "teal" }}>
              <Text
                _hover={{ textDecoration: "underline" }}
                mb={3}
                fontSize={"20px"}
              >
                About Us
              </Text>

              <SimpleGrid color={"rgb(95, 95, 95)"}>
                <Text _hover={{ textDecoration: "underline" }}>
                  Charitable Contributions
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Company Information
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Sustainability Commitment
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Investor Relations
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>Careers</Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Kirkland Signature
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Logo and Media Requests
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  The Costco Connection
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Quick & Easy Recipe Videos
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Costco Blog
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Employee Site
                </Text>
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          <SimpleGrid textAlign={"left"} fontWeight={400} gap={3}>
            <Box style={{ color: "teal" }}>
              <Text
                mb={3}
                _hover={{ textDecoration: "underline" }}
                fontSize={"20px"}
              >
                Membership
              </Text>

              <SimpleGrid color={"rgb(95, 95, 95)"}>
                <Text _hover={{ textDecoration: "underline" }}>Join Now</Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Member Privileges
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Executive Membership Terms
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Sign In or Register
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Credit Card
                </Text>
              </SimpleGrid>
            </Box>

            <Box style={{ color: "teal" }}>
              <Text
                _hover={{ textDecoration: "underline" }}
                mb={3}
                fontSize={"20px"}
              >
                Vendors & Suppliers
              </Text>

              <SimpleGrid color={"rgb(95, 95, 95)"}>
                <Text _hover={{ textDecoration: "underline" }}>
                  Supply Chain Disclosure
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Ethics Hotline for Suppliers
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Supplier Diversity
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Explore Our Brands
                </Text>
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          <SimpleGrid textAlign={"left"} fontWeight={400}>
            <Box style={{ color: "teal" }}>
              <Text
                _hover={{ textDecoration: "underline" }}
                fontSize={"20px"}
                mb={3}
              >
                Customer Service
              </Text>

              <SimpleGrid color={"rgb(95, 95, 95)"}>
                <Text _hover={{ textDecoration: "underline" }}>
                  Costco Shop Card Balance
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Order By Item Number
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Costco Technical & Warranty
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>Services</Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Volume Sales: Export & Domestic
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>Order Status</Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Preventing Fraud
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>Shipping</Text>
                <Text _hover={{ textDecoration: "underline" }}>Rebates</Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Recalls & Product Notices
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Return & Exchange Policy
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Accessibility
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Photo Printing Help
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Pricing Adjustments
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>Feedback</Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Member Prescription
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>Home Delivery</Text>
                <Text _hover={{ textDecoration: "underline" }}>Site Map</Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  My Website Improvements
                </Text>
              </SimpleGrid>
            </Box>
          </SimpleGrid>

          <SimpleGrid textAlign={"left"} fontWeight={400}>
            <Box style={{ color: "teal" }}>
              <Text
                _hover={{ textDecoration: "underline" }}
                fontSize={"20px"}
                mb={3}
              >
                Privacy
              </Text>

              <SimpleGrid color={"rgb(95, 95, 95)"}>
                <Text _hover={{ textDecoration: "underline" }}>
                  Privacy Policy
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>CA Notice</Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Interest-Based Ads
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  CA - Do Not Sell My Information
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  CA Notice of Financial Incentive
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Pay Transparency
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Commitment to Diversity
                </Text>
                <Text _hover={{ textDecoration: "underline" }}>
                  Cookie Settings
                </Text>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </SimpleGrid>

        <Accordion
          display={["block", "block", "none", "none"]}
          border={"none"}
          textAlign={"left"}
          allowToggle
        >
          <AccordionItem border={"none"} style={{ color: "teal" }}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  About Us
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"rgb(95, 95, 95)"}>
              <Text>Charitable Contributions</Text>
              <Text>Company Information</Text>
              <Text>Sustainability Commitment</Text>
              <Text>Investor Relations</Text>
              <Text>Careers</Text>
              <Text>Kirkland Signature</Text>
              <Text>Logo and Media Requests</Text>
              <Text>The Costco Connection</Text>
              <Text>Quick & Easy Recipe Videos</Text>
              <Text>Costco Blog</Text>
              <Text>Employee Site</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none"} style={{ color: "teal" }}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Membership
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"rgb(95, 95, 95)"}>
              <Text>Join Now</Text>
              <Text>Member Privileges</Text>
              <Text>Executive Membership Terms</Text>
              <Text>Sign In or Register</Text>
              <Text>Credit Card</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none"} style={{ color: "teal" }}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Vendors & Suppliers
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"rgb(95, 95, 95)"}>
              <Text>Supply Chain Disclosure</Text>
              <Text>Ethics Hotline for Suppliers</Text>
              <Text>Supplier Diversity</Text>
              <Text>Explore Our Brands</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none"} style={{ color: "teal" }}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Customer Service
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"rgb(95, 95, 95)"}>
              <Text>Costco Shop Card Balance</Text>
              <Text>Order By Item Number</Text>
              <Text>Costco Technical & Warranty Services</Text>
              <Text>Volume Sales: Export & Domestic</Text>
              <Text>Order Status</Text>
              <Text>Preventing Fraud</Text>
              <Text>Shipping</Text>
              <Text>Rebates</Text>
              <Text>Recalls & Product Notices</Text>
              <Text>Return & Exchange Policy</Text>
              <Text>Accessibility</Text>
              <Text>Photo Printing Help</Text>
              <Text>Pricing Adjustments</Text>
              <Text>Feedback</Text>
              <Text>Member Prescription</Text>
              <Text>Home Delivery</Text>
              <Text>Site Map</Text>
              <Text>My Website Improvements</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem border={"none"} style={{ color: "teal" }}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Privacy
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"rgb(95, 95, 95)"}>
              <Text>Privacy Policy</Text>
              <Text>CA Notice</Text>
              <Text>Interest-Based Ads</Text>
              <Text>CA - Do Not Sell My Information</Text>
              <Text>CA Notice of Financial Incentive</Text>
              <Text>Pay Transparency</Text>
              <Text>Commitment to Diversity</Text>
              <Text>Cookie Settings</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Footer;
