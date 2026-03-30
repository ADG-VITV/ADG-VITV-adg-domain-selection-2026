import { Box, Flex, Text } from "@chakra-ui/react"


const Footer = () => {
  return (
    <footer>
      <Box height={10} bg="black" color="white" p={4} fontSize={["sm", "md"]} fontWeight="600">
        <Flex justifyContent="space-around" alignItems="center" height="100%">

          <Text>
            For any queries, kindly mail us at{" "}
            <Box
              as="a"
              href="mailto:ios@vit.ac.in?subject=Query regarding ADG VIT"
              color="blue.300"
              _hover={{ textDecoration: "underline", color: "blue.400" }}
            >
              ios@vit.ac.in
            </Box>
          </Text>
          
        </Flex>
      </Box>
    </footer>

  )
}

export default Footer