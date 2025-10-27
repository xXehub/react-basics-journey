import { Image } from "react-native";
import { Box, Pressable } from "@gluestack-ui/themed";
// Functional Component with props
const Header = (props) => {
  return (
    <Box
      backgroundColor="#AA0002"
      flexDirection="row"
      justifyContent="space-between"
      padding={15}
      paddingTop={50}
    >
      <Pressable onPress={() => props.drawer.current.openDrawer()}>
        <Box width={18} height={18}>
          <Image
            source={require("../assets/menu.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Pressable>
      <Box>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box width={36} height={16} marginRight={5}>
            <Image
              source={require("../assets/facebook.png")}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </Box>
          <Box width={36} height={16} marginRight={5}>
            <Image
              source={require("../assets/youtube.png")}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </Box>
          <Box width={36} height={16} marginRight={5}>
            <Image
              source={require("../assets/twitter.png")}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </Box>
          <Box width={36} height={16}>
            <Image
              source={require("../assets/search.png")}
              style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
