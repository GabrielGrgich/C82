import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style = {styles.andriodSafeArea}/>
          <View style = {styles.cardContainer}>
          <View style = {styles.storyImage}></View>
          <Image source = {require("ST-82-Boilerplate-main/assets/story_image_1.png")} 
          style = {{resizeMode:"contain", width: DImensions.get("window").width-60,height: 250,borderRadius:10,}}></Image>
          </View>
          <View style = {styles.titleContianer}>
          <View style = {styles.titletextContianer}>
          <View style = {styles.storyTitle}>
          <Text style = {styles.storyTitleText}>{this.props.story.title}</Text>
          </View>
          <View style = {styles.storyAuthor}>
          <Text style = {styles.storyAuthorText}>{this.props.story.author}</Text>
          </View>
          </View>
          </View>
          <View style = {styles.discContainer}>
      <Text style = {styles.descText}>{this.props.story.description}</Text>
          </View>
          <View style = {styles.actionContainer}>
          <View style = {styles.likeButton}>
          <View style =  {styles.likeIcon}>
            <IonIcons name = {"heart"} size = {30} color = {"white"} 
            style = {{width: 30,marginLeft:20,marginTop:5}}/>
          </View>
          <View>
            <Text style = {style.likeText}>12k</Text>
          </View>
          </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  andriodSafeArea:{
    marginTop: Platform.OS==="andriod"?StatusBar.currentHeight:0
  },
  cardContainer:{
    marginTop: -20,
    marginBottom:20,
    marginLeft:20,
    marginRight:20,
    backgroundColor:"#2f345d",
    borderRadius:20,
    height: undefined,
    padding:10,
  },
  titleContianer:{
    flexDirection:"row"
  },
  titletextContianer:{
    flex:1
  },
  storyTitleText:{
    fontFamily:"Bubblegum-Sans",
    fontSize:25,
    color:"white",
  },
  storyAuthorText:{
    fontFamily:"Bubblegum-Sans",
    fontSize:18,
    color:"white",
  },
  descContainer:{
    marginTop:5,
  },
  descText:{
    fontFamily:"Bubblegum-Sans",
    fontSize:13,
    color:"white",
  },
  actionContainer:{
    marginTop:10,
    justifyContent:"center",
    alignItems:"center",
  },
  likeButton:{
    backgroundColor:"#eb3948",
    borderRadius:30,
    width:160,
    height:40,
    flexDirection:"row",
  },
  likeText:{
    fontFamily:"Bubblegum-Sans",
    fontSize:25,
    color:"white",
    marginLeft:25,
    marginTop:6,
  },
  
});
