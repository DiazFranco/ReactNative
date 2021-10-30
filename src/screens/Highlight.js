import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, Image } from 'react-native';
import {useNavigation } from '@react-navigation/native';
// import { UpdateIcon } from '@heroicons/react/solid';

// export const iconUpload = (<UpdateIcon className="w-8 h-8 text-orange-50"/>)


const DATA = [
    {
      title: 'Upload from phone',
      icon: require("../../assets/upload.png"),
      id: 1
    },
    {
      title: 'Add from your instagram',
      icon: require("../../assets/instagram.png"),
      id: 2
    },
    {
      title: 'Add from your facebook',
      icon: require("../../assets/facebook.png"),
      id: 3
    },
    {
      title: 'Add from your youtube',
      icon: require("../../assets/youtube.png"),
      id: 4  
    }
  ];


export const Highlight = () => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);
    const handleNavegation = (id) => {
      if (id === 1) {
        navigation.navigate('ImageDescription')
      } else {
        navigation.navigate('Post')
      }
    }
    const renderItem = ({ item }) => {
    const backgroundColor = 'white';
    const color = 'black';
    return (
      <TouchableOpacity onPress={ () => handleNavegation(item.id)} style={[styles.item, { backgroundColor: 'white' }]}>
        <Image source={item.icon}
        />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

    return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titlePage}>Add a new Higlight</Text>
                    <Text style={styles.subtitle}>Choose a video or image:</Text>
                </View>
                <View style={styles.body}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.title}
                    extraData={selectedId}
                />
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F8',
        flex: 1,
    },
    header: {
      marginTop: 40,
      marginLeft: 50
    },
    titlePage: {
        width: 293,
        height: 32,
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10
    },
    subtitle: {
        marginTop: 10,
        fontSize: 14,
        color: "#213638",
    },
    title: {
        fontSize: 17,
        height: 100,
        marginTop: 20
    },
    item: {
        backgroundColor: "white",
        paddingTop: 10,
        paddingLeft: 15,
        marginHorizontal: 16,
        borderRadius: 10,
        borderBottomColor: '#ECEAEA',
        borderBottomWidth: 1,
        width:324,
        height: 100,
        flexDirection: 'row'
      },
    body: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    icon: {
        width: 40,
        height: 40
    }
});
