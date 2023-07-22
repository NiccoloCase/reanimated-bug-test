import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Animated, { FadeInLeft, FadeOut } from "react-native-reanimated";
import { MyAnimatedText } from "./MyAnimatedText";

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <MyAnimatedText bold size="title">
          Inizia!
        </MyAnimatedText>
        <MyAnimatedText delay={400} style={{ marginTop: 20 }}>
          Scopri le persone strettamente vicine a te e interagisci con loro
        </MyAnimatedText>

        <Animated.View
          style={{
            borderLeftWidth: 3,
            borderColor: "red",
            paddingVertical: 20,
            paddingHorizontal: 20,
            marginTop: 20,
          }}
          entering={FadeInLeft.delay(500).duration(400)}
          exiting={FadeOut}
        >
          <Text mediumEmphasis>
            utilizza varie tecnologie tra cui il BLE per renderti visibili ai
            dispositivi vicini{" "}
            <Text
              bold
              mediumEmphasis
              style={{ textDecorationLine: "underline" }}
            >
              solo
            </Text>{" "}
            con il tuo consenso.
          </Text>
        </Animated.View>

        <Animated.View
          entering={FadeInLeft.delay(900).duration(400)}
          exiting={FadeOut}
          style={{
            borderLeftWidth: 3,
            borderColor: "red",
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text mediumEmphasis>
            Affinchè tu sia sempre visibile consigliamo di tenere l'app aperta
            per la massima efficienza.{" "}
            <Text bold>L'utilizzo in background è possibile ma limitato.</Text>
          </Text>
        </Animated.View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    flex: 1,
    marginBottom: 10,
  },
});
