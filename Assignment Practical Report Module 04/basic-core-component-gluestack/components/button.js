import { Button as GluestackButton, ButtonText } from "@gluestack-ui/themed";
// Functional Component with props
const Button = (props) => {
  return (
    <GluestackButton
      backgroundColor="#dddddd"
      padding={15}
      borderRadius={30}
      width="100%"
      onPress={props.onPress}
    >
      <ButtonText 
        fontSize={16}
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center"
      >
        {props.text}
      </ButtonText>
    </GluestackButton>
  );
};

export default Button;
