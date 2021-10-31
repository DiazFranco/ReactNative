import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView, Alert } from 'react-native';
import {NavigationContainer, useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Work } from '../components/Work';
import { Education } from '../components/Education';

const Tab = createMaterialTopTabNavigator();

const { width } = Dimensions.get('window');

const listTab = [
  {
    status: 'Work Experience'
  },
  {
    status: 'Education & Certification'
  }
]

const data = [
  {
    name:'Role name',
    status:'May 2020 - Now',
    course_name:'Course Name'
  },
  {
    name:'Role name',
    status:'May 2020 - Now',
    course_name:'Course Name'
  },
  {
    name:'Role name',
    status:'Aug 2019 - Nov 2019',
    course_name:'Course Name'
  },
  {
    name:'Role name',
    status:'Aug 2019 - Nov 2019',
    course_name:'Course Name'
  }
]

export const Home = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState('Work Experience')
  const [datalist, setDataList] = useState(data)

  const setStatusFilter = status => {
    setStatus(status)
    setDataList(data)
  }

  return (
    <ScrollView>
    <View style={styles.container}>
        <Image
          source={require("../../assets/raymond.png")}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => Alert.alert('Changes saved')}
          style={styles.fabLocation}
        >
          <View style={styles.button}>
            <Text style={styles.textButton}>Save Changes</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.texts}>
          <Text style={styles.title}>Hi, I´m Raymond</Text>
          <Text style={styles.description}>An Independent Personal Trainer with over 5 years of experiencie</Text>
          <Text style={styles.location}>New York, NY</Text>
          <Image style={styles.arrow}
          source={require("../../assets/flecha.png")}
          resizeMode="cover"
        />
        </View>
    </View>
    <View style={styles.secondPage}>
      <Text style={styles.titleTwoPage}>What I´ve been up to</Text>
      <Text style={styles.subtitlePage}>Check out my latest updates</Text>
      <Text style={styles.textOpacity}>Hold and drag each card to change the order</Text>
      <ScrollView  horizontal={true}
                                       decelerationRate={0}
                                       snapToInterval={width - 60}
                                       snapToAlignment={"center"}>
        <View style={{marginHorizontal: 10}}>
        <TouchableOpacity style={styles.fitImage} 
                            onPress={ () => Alert.alert('Maintenance')}>
          <Image style={styles.fitImage}
            source={require("../../assets/fit.png")}
            resizeMode="cover"
          />
          </TouchableOpacity>
          <Text style={styles.textCard}>My latest session</Text>
          <Text style={{fontSize: 10, color: '#AEA59B'}}>video preview</Text>
        </View>
        <View>
        <TouchableOpacity style={styles.fitImage} 
                            onPress={ () => navigation.navigate('Highlight')}>
          <Image style={styles.fitImage}
            source={require("../../assets/fit.png")}
            resizeMode="cover"
          />
          </TouchableOpacity>
          <Text style={styles.textCard}>Instagram Post</Text>
          <Text style={{fontSize: 10, color: '#AEA59B'}}>@accountname</Text>
        </View>
        
      </ScrollView>
      <Text style={styles.titlePage}>Recomendations</Text>
      <Text style={styles.subtitlePage}>Here´s what other people have to say about me</Text>
      <View style={styles.cards}>
          <View style={{marginLeft: 15}}>
            <Image
              source={require("../../assets/first.png")}
              style={{
                height: 60,
                width: 60,
                marginLeft: 10
              }}
            />
            <Text>John Smith</Text>
            <Text style={{ color: "#D17F5C", paddingTop: 5, fontSize: 12 }}>
            Studio Owner
            </Text>
          </View>
          <View style={{marginLeft: 15}}>
            <Image
              source={require("../../assets/second.png")}
              style={{
                height: 60,
                width: 60,
                marginLeft: 10
              }}
            />
            <Text>Meg Johson</Text>
            <Text style={{ color: "#D17F5C", paddingTop: 5, fontSize: 12 }}>
              Yoga Teacher
            </Text>
          </View>
          <View style={{marginLeft: 15}}>
            <Image
              source={require("../../assets/third.png")}
              style={{
                height: 60,
                width: 60,
                marginLeft: 10
              }}
            />
            <Text>Mary Davis</Text>
            <Text style={{ color: "#D17F5C", paddingTop: 5, fontSize: 12 }}>
              Personal Trainer
            </Text>
          </View>
        </View>
        <View>
            <Text style={{textAlign: 'center', marginTop:20, fontSize:16, color:'#D17F5C', fontWeight:'bold'}}>view more</Text>
        </View>
        <View>
          <Text style={styles.titlePage}>My Experience</Text>
          <Text style={styles.subtitlePage}>Here are a few of my most relevant roles and education</Text>
        </View>
    </View>
    <View style={{borderTopRightRadius: 60, borderBottomRightRadius: 60, borderRadius: 20}}>
    <View style={styles.listTab}>
    <Tab.Navigator>
        <Tab.Screen name="Work Experiencie" component={Work} />
        <Tab.Screen name="Education & Certification" component={Education} /> 
    </Tab.Navigator>
    </View>
    </View>
    {/* <FlatList
      data={datalist}
      keyExtractor={(e, i) => i.toString()}
      renderItem={renderItem}
    />   */}
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    height:'100%',
    width:'100%',
  },
  fitImage: {
    flex: 1,
    alignSelf: 'center',
    width: 203,
    height: 315,
    marginTop: 20,
    borderRadius: 20
  },
  fabLocation: {
    position: 'absolute',
    top: 544,
    left: 226
  },
  button: {
    backgroundColor: "#EBA14A",
    borderRadius: 32,
    width: 134,
    height: 38,
    justifyContent: "center"
  },
  textButton: {
    color: "white",
    alignSelf: "center",
    fontWeight: 'bold'
  },
  texts: {
    flex: 1,
    marginLeft: 20,
    marginTop: 60
  },
  title: {
    color: "#213638",
    fontSize: 24,
    flex: 1,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    height: 56
  },
  location: {
    color: '#AEA59B'
  },
  arrow: {
    flex: 1,
    width: 50,
    height: 20,
    marginLeft: 125,
  },  
  titleTwoPage: {
    fontSize: 32,
    color: "#213638",
    fontWeight: "bold"
  },
  subtitlePage: {
    marginTop: 10,
    fontSize: 14,
    color: "#213638",
    marginBottom: 10
  },
  textOpacity: {
    fontSize: 14,
    color: "#658487",
    marginTop: 10
  },
  secondPage: {
    flex: 1,
    marginLeft: 20,
    marginTop: 60,
  },
  textCard: {
    marginTop: 10,
    color: '#404148',
    fontWeight: 'bold'
  },
  cards: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#FAF9F8",
    borderRadius: 30, 
    overflow: "hidden",
    justifyContent: 'space-around',
    marginTop: 20
  },
  titlePage: {
    width: 305,
    height: 39,
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 50
  },
  thirdPage: {
    flex: 1
  },
  listTab: {
    width: '100%',
    height: 500
  },
  btnTab: {
    width: 120,
    height: 40,
    flexDirection: 'row',
    borderColor: 'black',
    justifyContent: 'center'
  },
  textTab: {
    fontSize: 24,
  },
  btnTabActive: {
    backgroundColor: '#FAF9F8'
  }, 
  textTabActive: {
    color: '#D17F5C'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 10
  }
});

