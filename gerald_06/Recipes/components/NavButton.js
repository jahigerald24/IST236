import { Pressable, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  return (
    <Pressable 
      onPress={props.onNext}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{props.children}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 75,
    weight: 150,
    margin: 8,
    borderRadius: 6,
    backgroundColor: Colors.accent500
  },
  pressedItem: {
    opacity: 0.8,
  },
  text: {
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "paperNoteBold",
    color: Colors.primary500,
  },
});
