import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import Stories from "./Components/stories";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerlogo} source={require("../instagram.png")} />
        <View style={styles.headericon}>
          <Image style={styles.moreimg} source={require("../more.png")} />
          <Image style={styles.moreimg} source={require("../heart.png")} />
          <Image style={styles.moreimg} source={require("../send.png")} />
        </View>
      </View>
      <View style={styles.storyheader}>
        <Text style={styles.storytext}>Stories</Text>

      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"black",
  },
  header:{
    height:50,
    width:"100%",
    backgroundColor:"black",
    
  },
  headerlogo:{
    marginTop:5,
    height:40,
    width:40,
    marginLeft:10,
  },
  headericon:{
    color:"blue",
    marginLeft:250,
    marginTop:-40,
    flexDirection:"row",
    alignItems:"center",
    gap:30,
  },
  moreimg:{
    marginTop:5,
    height:30,
    width:30,
  },
  storyheader:{
    marginBottom:670,
  },
  storytext:{
    color:"white",
  },
});
