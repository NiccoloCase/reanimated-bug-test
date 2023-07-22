import { Text, SafeAreaView } from "react-native";
import Animated, {
  FadeInUp,
  FadeOutUp,
  FadeInLeft,
} from "react-native-reanimated";

export const MyAnimatedText = ({
  children,
  delay,
  containerStyle,
  ...props
}) => {
  return (
    <Animated.View
      style={containerStyle}
      entering={FadeInUp.delay(delay || 0)}
      exiting={FadeOutUp}
    >
      <Text {...props}>{children}</Text>
    </Animated.View>
  );
};
