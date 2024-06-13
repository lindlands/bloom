import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, Text, Image, Platform, ImageBackground, Dimensions } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { LinearGradient } from "expo-linear-gradient";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function HomeScreen() {
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
            Bertrand
          </Text>
        </View>
        <View style={styles.picturearea}>
        <Image
            source={{
              uri: "https://www.svgrepo.com/show/108986/left-arrow.svg",
            }}
            style={{ height: 30, width: 20 }}
          />
        <Image
            source={require("../../assets/images/bertrand.jpg")}
            style={{ height: 150, width: 150, marginHorizontal: 30}}
          />
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
              Bell Pepper
            </Text>
            <Text style={styles.subtitleText}>
              8 mo
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
        <View style={styles.tabbar}>
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
          </View>
      </LinearGradient>
    </View>
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
