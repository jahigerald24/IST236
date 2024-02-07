import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function App() {
  const movieItems = [
    {
      name: "The Godfather",
      image: require("./assets/images/godfather.jpg"),
      rating: "9.2",
    },
    {
      name: "The Shawshank Redemption",
      image: require("./assets/images/shawshank.jpg"),
      rating: "9.3",
    },
    {
      name: "Schindler's List",
      image: require("./assets/images/schindler's.jpg"),
      rating: "9",
    },
    {
      name: "Raging Bull",
      image: require("./assets/images/ragingbull.jpg"),
      rating: "8.1",
    },
    {
      name: "Casablanca",
      image: require("./assets/images/casablanca.jpg"),
      rating: "8.5",
    },
    {
      name: "Citizen Kane",
      image: require("./assets/images/citizenkane.jpg"),
      rating: "8.3",
    },
    {
      name: "Gone with the Wind",
      image: require("./assets/images/gonewiththewind.jpg"),
      rating: "8.2",
    },
    {
      name: "The Wizard of Oz",
      image: require("./assets/images/wizardofoz.jpg"),
      rating: "8.1",
    },
    {
      name: "One Flew Over the Cuckoo's Nest",
      image: require("./assets/images/cuckoo's.jpg"),
      rating: "8.7",
    },
    {
      name: "Lawrence of Arabia ",
      image: require("./assets/images/lawrence.jpg"),
      rating: "8.3",
    },
  ];

  const renderMovieItem = ({ item }) => (
    <View style={styles.movieItem}>
      <Image source={item.image} style={styles.moviePoster} />
      <Text style={styles.movieTitle}>{item.name}</Text>
      <Text style={styles.movieRating}>Rating: {item.rating}</Text>
    </View>
  );

  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.rootContainer}>
        <Text style={styles.title}>Top 10 Movies</Text>
        <FlatList
          data={movieItems}
          renderItem={renderMovieItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  flatList: {
    width: '100%',
  },
  movieItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  moviePoster: {
    width: 200,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  movieRating: {
    fontSize: 16,
    marginTop: 5,
  },
});