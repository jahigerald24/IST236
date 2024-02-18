import { View, StyleSheet, Text, Image, Linking } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";


function HomeScreen(props) {
    //Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();
    return(
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top ,
                paddingBottom: insets.bottom ,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>


        <View style={styles.titleContainer}>
            <Title>Olive Garden</Title>
        </View>

        <View style={styles.imageContainer}>
            <Image 
             style={styles.image}
             source={require("../assets/images/olivegarden.jpg")} 
            />
        </View>  

         <View style={styles.infoContainer}>
            <Text
                style={styles.infoText}
                onPress={() => Linking.openURL("tel:8436268856")}
            >
                843-626-8856
            </Text>

            <Text
                style={styles.infoText}
                onPress={() => Linking.openURL("https://maps.app.goo.gl/h59V1D3L9KT455dP8")}
            >
                1405 N Kings Hwy, Myrtle Beach, SC 29577
            </Text>

            <Text
                style={styles.infoText}
                onPress={() => Linking.openURL("https://www.olivegarden.com/home")}
            >
                www.olivegarden.com
            </Text>
        </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onNext}>View Menu</NavButton>
            </View>

        </View>
    );

}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center"
    },
    imageContainer: {
        flex: 4,
    },
    image: {
        resizeMode: "cover",
        height: "100%",
        width: 380
    },
    infoContainer: {
        flex: 3,
        justifyContent: "center"
    },
    infoText: {
        fontSize: 30,
        textAlign: "center",
        padding: 7,
        color: Colors.primary500,
        fontFamily: "apricot"
    },
    buttonContainer: {
        flex: 1
    }
})