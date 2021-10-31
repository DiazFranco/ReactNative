import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';

export const Work = () => {
    return (
        <View style={styles.experience}>
         <Image
              source={require("../../assets/tiempo.png")}
              style={{
                height: 239,
                width: 10,
                marginLeft: 10
              }}
            />
      <View style={styles.roleDescription}>
        <Text style={styles.itemName}> Role Name</Text>
        <Text style={styles.itemStatus}>Company Name</Text>
        <Text style={styles.itemName}> Role Name</Text>
        <Text style={styles.itemStatus}>Company Name</Text> 
        <Text style={styles.itemName}> Role Name</Text>
        <Text style={styles.itemStatus}>Company Name</Text> 
        <Text style={styles.itemName}> Role Name</Text>
        <Text style={styles.itemStatus}>Company Name</Text>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    experience: {
        width: '50%',
        flex: 1,
        flexDirection: 'row',
        marginLeft: 25,
        marginTop: 50
      },
      roleDescription: {
        flex: 1,
        flexDirection: 'column',
        marginTop: -15
      },
      itemName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
      },
      itemStatus: {
        paddingHorizontal: 6,
        justifyContent: 'flex-start',
        right: 12,
        marginLeft: 23,
        marginBottom: 20
      },
});
