import React, { useState } from 'react'
import { Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const video1 = <Image style={{width: 125, height: 80}} source={require("../../assets/video1.png")}/>
export const video2 = <Image style={{width: 125, height: 80}} source={require("../../assets/video2.png")}/>
export const video3 = <Image style={{width: 125, height: 80}} source={require("../../assets/video3.png")}/>
export const video4 = <Image style={{width: 125, height: 80}} source={require("../../assets/video4.png")}/>
export const video5 = <Image style={{width: 125, height: 80}} source={require("../../assets/video5.png")}/>
export const video6 = <Image style={{width: 125, height: 80}} source={require("../../assets/video6.png")}/>

const DATA = [
    {
      title: 'Cardio Glow Up Workout I Hot girl Summer Sculpt',
      image: video1
    },
    {
      title: '30 minutes head to toe tone',
      image: video2
    },
    {
      title: 'Add from your facebook',
      image: video3
    },
    {
      title: 'Add from your youtube',
      image: video4  
    },
    {
        title: 'Add from your youtube',
        image: video5  
    },
    {
        title: 'Add from your youtube',
        image: video6  
    }
  ];


  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.image}{item.title}</Text>
  </TouchableOpacity>
  );


export const Post = () => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
    const backgroundColor = 'white';
    const color = 'black';
    return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />
      );
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titlePage}>Choose your post</Text>
            <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                    extraData={selectedId}
                />
            {/* <TouchableOpacity
                onPress={() => Alert.alert('Changes saved')}
                style={styles.fabLocation}
            >
          <View style={styles.button}>
            <Text style={styles.textButton}>Next</Text>
          </View>
        </TouchableOpacity> */}
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flex: 1,
        flex: 50
    },
    titlePage: {
        width: 305,
        height: 39,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 40
    },
    image: {
        flex: 1,
        alignSelf: 'center',
        width: 333,
        height: 546,
        marginTop: 20
    },
    fabLocation: {
        position: 'absolute',
        bottom: 728,
        left: 32
      },
      title: {
        fontSize: 10,
        height: 100,
        marginBottom: 5
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
        backgroundColor: "white",
        paddingLeft: 15,
        width:324,
        height: 100
      },
    body: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    videos: {
        width: 125,
        height: 73
    }
});