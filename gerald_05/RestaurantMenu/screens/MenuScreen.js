import { View, StyleSheet, Text, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NavButton from "../components/NavButton";
import Title from "../components/Title";
import { useState } from "react";
import MenuItem from "../components/MenuItems";


function MenuScreen(props) {
    //Set Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();

    const [menuItems, setMenuItems] = useState([
        {
            name: "Fettuccine Alfredo",
            image: require("../assets/images/fettuccine.jpg"),
            price: "$9.99",
            id: 1
        },
        {
            name: "Lasagna Classico",
            image: require("../assets/images/lasagna.jpg"),
            price: "$10.99",
            id: 2
        },
        {
            name: "Eggplant Parmigiana",
            image: require("../assets/images/parmigiana.jpg"),
            price: "$9.99",
            id: 3
        },
        {
            name: "Shrimp Scampi",
            image: require("../assets/images/scampi.jpg"),
            price: "$10.99",
            id: 4
        },
        {
            name: "Spaghetti & Meatballs",
            image: require("../assets/images/spaghetti.jpg"),
            price: "$10.99",
            id: 5
        },
    ]);

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
            <Title>Menu</Title>
        </View>

        <View style={styles.listContainer}>
            <FlatList 
            data = {menuItems}

            keyExtractor={(item) => item.id} 

            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) => {
                return (
                    <MenuItem
                        name={itemData.item.name}
                        image={itemData.item.image}
                        price={itemData.item.price}
                    />
                );
            }}
            />
        </View>

        <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Home</NavButton>
        </View>

        </View>
    )

}

export default MenuScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: "center"
    },
    titleContainer: {
        flex: 1,
        justifyContent: "center"
    },
    listContainer: {
        flex: 7,
        width: 300
    },
    buttonContainer: {
        flex: 1
    }
})