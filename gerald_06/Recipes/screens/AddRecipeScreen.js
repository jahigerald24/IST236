import { Image, View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from "../constants/colors";




    function AddRecipeScreen(props){
        // Set Safe Area Screen Boundaries
        const insets = useSafeAreaInsets();

       return (
        <View
          style={[
            styles.rootContainer, 
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            },
           ]}
        >
            <View style={styles.titleContainer}>
                <Title>Add New Recipe</Title>
            </View>

           

            
        </View>
       );
    }

    export default AddRecipeScreen;

    const styles = StyleSheet.create({
        rootContainer: {
            flex: 1,
            width: "90%",
        },
        titleContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 20,
        },
        imageContainer: {
            flex: 2,
            justifyContent: "center",
            borderWidth: 4,
            borderRadius: 55,
            borderColor: Colors.primary500
        },
        image: {
            height: "50%",
            width: "50%",
            borderRadius: 50,
            resizeMode: "stretch",
        },
        navButtonContainer: {
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
        },

    });