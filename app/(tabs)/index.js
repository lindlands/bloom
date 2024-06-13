import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text, Image, Platform, ImageBackground, Dimensions, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import MyCarousel from '../image_carousel.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


function HomeScreen(initialParams) {
  const { plantNum, numPictures, plantType, plantAge } = initialParams.route.params

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Personal Info' },
    { key: 'second', title: 'General Info' },
  ]);

  const FirstRoute = () => (
    <View style={styles.maintext}>
      <Text style={[styles.bodyText, {marginHorizontal: 20,}]}>
        This is a bunch of text that talks about your particular plant. How cool.
      </Text>
    </View>
  );
  
  const SecondRoute = () => (
    <View style={styles.maintext}>
      <Text style={[styles.bodyText, {marginHorizontal: 20,}]}>
        This is a bunch of text that talks about your plant species. Lots of general info about your type of plant!
      </Text>
    </View>
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#E5DEB2' }}
      activeColor={{ backgroundColor: '#E5DEB2' }}
      inactiveColor={{ backgroundColor: '#F9F9ED' }}
      //labelStyle={{ backgroundColor: '#black' }}
      style={{ backgroundColor: '#F9F9ED' }}
      //getLabelText= 'black'
      renderLabel={({ route, focused, color }) => (
        <Text style={{ color: 'black', margin: 8 }}>
          {route.title}
        </Text>
      )}
    />
  );
  
  return (
    <View style={styles.container}>
      <ImageBackground
            source={require("../../assets/images/paper.jpg")}
            style={{
              width: windowWidth,
              height: windowHeight,
              position: "absolute",
            }}
            imageStyle={{
              resizeMode: "cover",
              alignSelf: "flex-end",
            }}
          ></ImageBackground>
      <LinearGradient style={{width: "100%", height: "100%"}} colors={["rgba(247, 236, 168, .4)", "rgba(195, 209, 140, .4)"]}>
        <View style={styles.topbar}>
          <Image
              source={{
                uri: "https://www.svgrepo.com/show/493725/sidebar-expand-layout-toggle-nav-navbar.svg",
              }}
              style={{ height: 30, width: 30, margin: 8, position: "absolute", left: 0}}
            />
          <Text style={styles.titleText}>
            {initialParams.route.name}
          </Text>
        </View>
        <View style={styles.picturearea}>
          <Image
              source={{
                uri: "https://www.svgrepo.com/show/108986/left-arrow.svg",
              }}
              style={{ height: 30, width: 20 }}
            />
          <MyCarousel nums={ {plantNum, numPictures} }/>
          <Image
            source={{
              uri: "https://www.svgrepo.com/show/27797/right-arrow.svg",
            }}
            style={{ height: 30, width: 20 }}
          />
        </View>

        <View style={[styles.picturearea, {marginHorizontal: 20}]}>
          <View style={styles.infobar}>
            <Text style={styles.subtitleText}>
              { plantType }
            </Text>
            <Text style={styles.subtitleText}>
              { plantAge }
            </Text>
          </View>
          <View style={{backgroundColor: "#FFAD8A", borderRadius: 50}}>
            <Image
              source={{
                uri: "https://icons.iconarchive.com/icons/iconsmind/outline/256/Pen-icon.png",
              }}
              style={{ height: 30, width: 30, margin: 8}}
            />
          </View>
        </View>

        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />

        {/* <View style={styles.tabbar}>
            <View style={{flex: .8, backgroundColor: "#F9F9ED",}}>
            <Text style={styles.tabText}>
              Personal Info
            </Text>
            </View>
            <View style={{flex: .6, backgroundColor: "#E5DEB2",}}>
            <Text style={styles.tabText}>
              General
            </Text>
            </View>
          </View>
          <View style={styles.maintext}>
            <Text style={[styles.bodyText, {marginHorizontal: 20,}]}>
              This is a bunch of text that talks about your particular plant. How cool.
            </Text>
          </View> */}
      </LinearGradient>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Bertrand">
        <Drawer.Screen name="Bertrand" component={HomeScreen} initialParams={{ plantNum: 0, numPictures: 5, plantType: "Bell Pepper", plantAge: "8 mo"}}/>
        <Drawer.Screen name="Silia" component={HomeScreen} initialParams={{ plantNum: 1, numPictures: 3, plantType: "Firefly Petunia", plantAge: "2 mo"}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  titleText: {
    justifyContent: "center",
    alignSelf:"center",
    alignContent: "center",
    fontSize: 26,
    fontWeight: "bold"
  },
  subtitleText: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  tabText: {
    fontSize: 18,
    alignSelf:"center",
    justifyContent: "center",
    alignItems: "center", 
    paddingVertical: 5
  },
  bodyText: {
    fontSize: 14,
  },
  topbar: {
    margin: 15,
    paddingBottom: 20,
    display: "flex", 
    flexDirection: "row", 
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "center"
    
  },
  picturearea: {
    flex: 1,
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "center"
  },
  infobar: {
    flex: 1,
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    alignContent: "center", 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#F9F9ED",
    marginRight: 20
  },
  tabbar: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "space-evenly",
    marginHorizontal: 20,
  },
  maintext: {
    flex: 2,
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "center",
    backgroundColor: "#F9F9ED",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 15,
  }
});
