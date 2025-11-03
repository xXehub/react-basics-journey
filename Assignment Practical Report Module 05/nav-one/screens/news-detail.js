import { useRoute } from "@react-navigation/native";
import { Box, Heading, Image, Text } from "native-base";
import { ScrollView } from "react-native";
import { Header } from "../components";

const NewsDetail = () => {
  const route = useRoute();
  const { item } = route.params;

  return (
    <>
      <Header title="News" withBack={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white" }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          alt="News Image"
          w="100%"
          h={220}
          resizeMode="cover"
        />
        
        <Box px="4" py="5">
          <Text color="gray.500" fontSize="sm" mb="2">
            {item.date}
          </Text>

          <Heading size="md" mb="3" lineHeight="md">
            {item.title}
          </Heading>

          <Text
            fontSize="sm"
            lineHeight="lg"
            color="gray.700"
            textAlign="justify"
          >
            {item.content}
          </Text>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;