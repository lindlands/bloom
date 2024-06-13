import { StyleSheet, View, Text, Image, ImageBackground, Dimensions, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import MyCarousel from '../image_carousel.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


function HomeScreen(initialParams) {
  const { plantNum, numPictures, plantType, plantAge } = initialParams.route.params
  const plantName = initialParams.route.name + "'s info"

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: plantName},
    { key: 'second', title: 'Species Info' },
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
          <Text style={styles.titleText}>
            {initialParams.route.name}
          </Text>
        </View>
        <View style={styles.picturearea}>
          <MyCarousel nums={ {plantNum, numPictures} }/>
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
        <View style={{flex: 1.9}}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
        </View>
      </LinearGradient>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="Silia"
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#BCD68D',
            },
            headerStyle: {
              backgroundColor: "rgba(247, 236, 168, .4)",
              shadowColor: "transparent",
            },
            drawerContentContainerStyle: {
              color: '#BCD68D',
            }
          }}> 
        <Drawer.Screen name="Bertrand" component={HomeScreen} initialParams={{ plantNum: 0, numPictures: 5, plantType: "Bell Pepper", plantAge: "8 mo"}} 
        options={{headerTitle: "",
          headerShadowVisible: false,}}/>
        <Drawer.Screen name="Silia" component={HomeScreen} initialParams={{ plantNum: 1, numPictures: 3, plantType: "Firefly Petunia", plantAge: "2 mo"}}
        options={{headerTitle: "",
          headerShadowVisible: false,}}/>
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
    fontWeight: "bold",
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
    marginBottom: 15,
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
