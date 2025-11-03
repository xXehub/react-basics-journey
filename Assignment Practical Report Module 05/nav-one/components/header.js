import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Box, Heading, HStack, Image } from "native-base";
import { StatusBar, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = ({ title, withBack = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: trueGray900 }}>
      <StatusBar barStyle="light-content" backgroundColor={trueGray900} />
      <Box bg={"trueGray.900"} p={"4"}>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Image
                  source={require("../assets/images/cnn.png")}
                  w="12"
                  h="12"
                  alt="CNN Logo"
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="white" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"white"}>{title}</Heading>
          </HStack>

          <HStack space={"2xl"}>
            <Image
              source={require("../assets/images/facebook.png")}
              w="5"
              h="5"
              alt="Facebook Icon"
            />
            <Image
              source={require("../assets/images/youtube.png")}
              w="5"
              h="5"
              alt="YouTube Icon"
            />
            <Image
              source={require("../assets/images/twitter.png")}
              w="5"
              h="5"
              alt="Twitter Icon"
            />
            <Image
              source={require("../assets/images/search.png")}
              w="5"
              h="5"
              alt="Search Icon"
            />
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;