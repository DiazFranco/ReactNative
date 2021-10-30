import React, { useState } from 'react'
import { Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



const DATA = [
  {
    title: 'Cardio Glow Up Workout I Hot girl Summer Sculpt',
    image: require("../../assets/video1.png"),
    id: 0
  },
  {
    title: '30 minutes head to toe tone',
    image: require("../../assets/video2.png"),
    id: 1
  },
  {
    title: '15 min AB fIt Test - can you get throught it all?',
    image: require("../../assets/video3.png"),
    id: 3
  },
  {
    title: 'Hot Girl Summer...Sculp: Are you in?',
    image: require("../../assets/video4.png"),
    id: 4
  },
  {
    title: 'Chocolate chip cookie dough ice cream recipe!',
    image: require("../../assets/video5.png"),
    id: 5
  },
  {
    title: '15 Minute Thigh Strength Test',
    image: require("../../assets/video6.png"),
    id: 6
  }
];


export const Post = () => {
  const [selectedId, setSelectedId] = useState([]);
  const handleSelection = (id) => {
    if (selectedId.includes(id)) {
      setSelectedId(selectedId.filter(x => x !== id))
    } else {
      setSelectedId([...selectedId, id])
    }
  }
  const renderItem = ({ item }) => {
    const selected = selectedId.includes(item.id)
    return (
      <TouchableOpacity onPress={() => handleSelection(item.id)} style={[styles.item, { backgroundColor: selected ? '#FCDEAB' : 'white' }]}>
        <Image source={item.image}
        />
        <View style={{ width: 100 }}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titlePage}>Choose your post</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
      <TouchableOpacity
        onPress={() => Alert.alert('Next')}
        style={styles.fabLocation}
      >
        <View style={styles.button}>
          <Text style={styles.textButton}>Next</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titlePage: {
    width: 305,
    height: 39,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 24
  },
  image: {
    flex: 1,
    alignSelf: 'center',
    width: 333,
    height: 546,
    marginTop: 20,
    marginLeft: 24
  },
  fabLocation: {
    marginBottom: 20,
    marginLeft: 50
  },
  title: {
    fontSize: 10,
    height: 50,
    marginBottom: 5,
    alignItems: 'center',
    marginLeft: 10
  },
  button: {
    backgroundColor: "#EBA14A",
    borderRadius: 32,
    width: 305,
    height: 46,
    justifyContent: "center"
  },
  textButton: {
    color: "white",
    alignSelf: "center",
    fontWeight: 'bold'
  },
  item: {
    flexDirection: 'row',
    backgroundColor: "white",
    paddingLeft: 10,
    width: 370,
    height: 150,
    marginLeft: 24,
    width: '100%',
    alignItems: 'center'
  },
  body: {
    marginTop: 20
  },
  videos: {
    width: 125,
    height: 73
  }
});