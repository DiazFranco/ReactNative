import React from 'react'
import { Text, StyleSheet, TextInput, Image, TouchableOpacity, View, ScrollView, Alert} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


export const ImageDescription = () => {
    const [text, onChangeText] = React.useState(null);
    return (
    <View style={styles.container}>
        <ScrollView>
        <View>
            <Text style={styles.titlePage}>Add a new Higlight</Text>
            <Text style={styles.title}>Choose a video or image</Text>
        </View>
        <SafeAreaView style={styles.image}>
        <Image
            source={require("../../assets/fit.png")}
            />
        </SafeAreaView>
          <View style={styles.section}>
            <Text style={styles.subtitle}>Add a Description</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Type"
            />
            <Text style={styles.subtitle}>Add a tag:</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="@Type"
            />
            <TouchableOpacity
          onPress={() => Alert.alert('Changes saved')}
          style={styles.fabLocation}
            >
          <View style={styles.button}>
            <Text style={styles.textButton}>Save Changes</Text>
          </View>
            </TouchableOpacity>
         </View>
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAF9F8',
        flex: 1,
        flex: 50,
    },
    titlePage: {
        marginTop: 80,
        marginLeft: 24,
        width: 293,
        height: 32,
        fontSize: 24,
        fontWeight: 'bold'
    },
    title: {
        marginLeft: 24,
        fontSize: 18,
        color: "#213638",
    },
    image: {
        marginTop: 20,
        resizeMode: 'contain',
        width: null,
        height: null,
        borderRadius: 12,
    },
    subtitle: {
        fontSize: 18,
        marginTop: 20,
        marginLeft: 24
    },
    input: {
        height: 56,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 324,
        marginLeft: 24
      },
    fabLocation: {
      },
    button: {
        backgroundColor: "#EBA14A",
        borderRadius: 32,
        width: 305,
        height: 46,
        justifyContent: "center",
        marginLeft: 32
      },
    textButton: {
        color: "white",
        alignSelf: "center",
        fontWeight: 'bold'
      },
      section: {
          flex: 1,
          alignItems: 'flex-start'
      }
});