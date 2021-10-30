import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, TouchableOpacity, Image } from 'react-native';
// import { UpdateIcon } from '@heroicons/react/solid';

// export const iconUpload = (<UpdateIcon className="w-8 h-8 text-orange-50"/>)

export const iconUpload = <Image style={{width: 40, height: 40}} source={require("../../assets/upload.png")}/>
export const iconInstagram = <Image style={{width: 40, height: 40}} source={require("../../assets/instagram.png")}/>
export const iconFacebook = <Image style={{width: 40, height: 40}} source={require("../../assets/facebook.png")}/>
export const iconYoutube = <Image style={{width: 40, height: 40}} source={require("../../assets/youtube.png")}/>

const DATA = [
    {
      title: 'Upload from phone',
      icon: iconUpload
    },
    {
      title: 'Add from your instagram',
      icon: iconInstagram
    },
    {
      title: 'Add from your facebook',
      icon: iconFacebook
    },
    {
      title: 'Add from your youtube',
      icon: iconYoutube  
    }
  ];


  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.icon}{item.title}</Text>
  </TouchableOpacity>
  );

export const Highlight = () => {
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
        position: 'absolute',
        top: 95,
        left: 24,
        backgroundColor: '#FAF9F8',
        flex: 1,
        flex: 50
    },
    header: {
        flex: 1,
        alignItems: 'flex-start'
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
        height: 50,
        marginBottom: 5
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
        height: 84
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
