import {
    Pressable,
    StyleSheet,
    View,
    Text,
    useWindowDimensions
  } from "react-native";
  import Colors from "../constants/colors";

  function NavButton(props) {
    const { width, height } = useWindowDimensions();

    return (
        <Pressable
          onPress={props.onPress}
          style={({ pressed }) => pressed && StyleSheet.pressedItem}
        >
          <View style={StyleSheet.buttonContainer}>
            <View style={StyleSheet.textContainer}>
                <Text style={[styles.text, { fontSize: width * 0.07 }]}>
                    {props.children}
                </Text>
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
        backgroundColor: Colors.primary500,
        borderRadius: 300,
        width: 1000,
        maxWidth: "70%",
        marginHorizontal: 10,
        marginVertical: 10,
    },
    pressedItem: {
        opacity: 0.5,
    },
    text: {
        padding: 8,
        fontSize: 25,
        fontFamily: "camp",
        textAlign: "center",
        color: Colors.primary300
    },
  });


