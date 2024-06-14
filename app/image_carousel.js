import React, { useEffect, useRef, useState } from 'react'
import { Button, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import { useKeenSliderNative } from "keen-slider/react-native"

export default function MyCarousel(nums) {
  const slides = nums.nums.numPictures
  const slider = useKeenSliderNative({
    slides
  })

  const images = [[<Image source={require("../assets/images/bertrand1-small.png")} style={styles.image} />, <Image source={require("../assets/images/bertrand2-small.png")} style={styles.image} />, <Image source={require("../assets/images/bertrand3-small.png")} style={styles.image} />, <Image source={require("../assets/images/bertrand4-small.png")} style={styles.image} />, <Image source={require("../assets/images/bertrand5-small.png")} style={styles.image} />],
                   <Image source={require("../assets/images/Silia1-small.png")} style={styles.image} />, <Image source={require("../assets/images/Silia2-small.png")} style={styles.image} />, <Image source={require("../assets/images/Silia3-small.png")} style={styles.image} />]

  function render_images(key) {
    return (
      images[nums.nums.plantNum][key]
    )
  }

  if (slides == 0) {
    return (
      <View>
      <Image
          source={{
            uri: "../assets/images/Funny_no_image.jpg",
          }}
          style={{ height: 30, width: 30, margin: 8}}
        />
        <Text style={styles.no_images_yet}> 
          No images yet
        </Text>
    </View>
    )
    


    // <Image 
    //   source={require("../assets/images/Funny_no_image.jpg")} 
    //   style={styles.image} />
    // <Text style={styles.text}> {key + 1} / {nums.nums.numPictures} </Text>
  } else {
    return (
        <View style={styles.slider} {...slider.containerProps}>
          {[...Array(slides).keys()].map(key => {
            return (
              <View key={key} {...slider.slidesProps[key]}>
                <View style={{...styles.slide}}>
                  {render_images(key)}
                  <Text style={styles.text}> {key + 1} / {nums.nums.numPictures} </Text>
                </View>
              </View>
            )
          })}
        </View>
    )
  }
  
}

const styles = {
  slider: {
    //backgroundColor: '#fff',
    overflow: 'hidden',
    width: '100%',
    height: "100%",
    //alignItems: 'center',
  },
  slide: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'black',
  },
  text: {
    color: '#bcd68d',
    fontSize: 20,
  },
  image: {
    height: 150, 
    width: 150, 
    marginHorizontal: 30
  },
  no_images_yet: {
    color: '#333333',
    fontSize: 20,
  }
}





// import * as React from 'react';
// import {
//   Text, 
//   View,
//   SafeAreaView } from 'react-native';

// import Carousel from 'react-native-snap-carousel';

// export default class MyCarousel extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//           activeIndex:0,
//           carouselItems: [
//           {
//               title:"Item 1",
//               text: "Text 1",
//           },
//           {
//               title:"Item 2",
//               text: "Text 2",
//           },
//           {
//               title:"Item 3",
//               text: "Text 3",
//           },
//           {
//               title:"Item 4",
//               text: "Text 4",
//           },
//           {
//               title:"Item 5",
//               text: "Text 5",
//           },
//         ]
//       }
//     }

//     _renderItem({ item, index }){
//         return (
//           <View style={{
//               backgroundColor:'floralwhite',
//               borderRadius: 5,
//               height: 250,
//               padding: 50,
//               marginLeft: 25,
//               marginRight: 25, }}>
//             <Text style={{fontSize: 30}}>{item.title}</Text>
//             <Text>{item.text}</Text>
//           </View>

//         )
//     }

//     render() {
//         return (
//           <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
//             <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
//                 <Carousel
//                   layout={"default"}
//                   ref={ref => this.carousel = ref}
//                   data={this.state.carouselItems}
//                   sliderWidth={300}
//                   itemWidth={300}
//                   renderItem={this._renderItem}
//                   onSnapToItem = { index => this.setState({activeIndex:index}) } />
//             </View>
//           </SafeAreaView>
//         );
//     }
// }
















// import Carousel from 'react-native-snap-carousel';
// import { Component } from 'react';
// import React from 'react';
// import { View, Text, SafeAreaView } from 'react-native';

// export default class MyCarousel extends Component {

//     constructor(props){
//         super(props);
//         this.state = {
//           activeIndex:0,
//           carouselItems: [
//           {
//               title:"Item 1",
//               text: "Text 1",
//           },
//           {
//               title:"Item 2",
//               text: "Text 2",
//           },
//           {
//               title:"Item 3",
//               text: "Text 3",
//           },
//           {
//               title:"Item 4",
//               text: "Text 4",
//           },
//           {
//               title:"Item 5",
//               text: "Text 5",
//           },
//         ]
//       }
//     }

//     _renderItem({item,index}){
//         return (
//           <View style={{
//               backgroundColor:'floralwhite',
//               borderRadius: 5,
//               height: 250,
//               padding: 50,
//               marginLeft: 25,
//               marginRight: 25, }}>
//             <Text style={{fontSize: 30}}>{item.title}</Text>
//             <Text>{item.text}</Text>
//           </View>

//         )
//     }

//     // _renderItem = ({item, index}) => {
//     //     return (
//     //         <View style={styles.slide}>
//     //             <Text style={styles.title}>{ item.title }</Text>
//     //         </View>
//     //     );
//     // }

//     render () {
//         return (
//             <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 50, }}>
//                 <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
//                     <Carousel
//                     layout={"default"}
//                     ref={ref => this.carousel = ref}
//                     data={this.state.carouselItems}
//                     sliderWidth={300}
//                     itemWidth={300}
//                     renderItem={this._renderItem}
//                     onSnapToItem = { index => this.setState({activeIndex:index}) } />
//                 </View>
//             </SafeAreaView>

//             // <Carousel
//             //   ref={(c) => { this.carousel = c; }}
//             //   data={this.state.entries}
//             //   renderItem={this._renderItem}
//             //   sliderWidth={sliderWidth}
//             //   itemWidth={itemWidth}
//             // />
//         );
//     }
// }