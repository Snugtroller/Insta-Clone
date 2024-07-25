import { StyleSheet, Text, View, Image, ScrollView} from "react-native";
import { StatusBar } from "expo-status-bar";
import {Divider} from "react-native-elements";
import Users from "../users.json";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.headerlogo} source={require("../instagram.png")} />
        <View style={styles.headericon}>
          <Image style={styles.moreimg} source={require("../more.png")} />
          <Image style={styles.moreimg} source={require("../heart.png")} />
          <Image style={styles.moreimg} source={require("../send.png")} />
        </View>
      </View>
      <View style={styles.storyheader}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Users.map((story, index) => (
            <View key={index} style={styles.storyContainer}>
              <Image source={{ uri: story.image }} style={styles.story} />
              <Text style={styles.storyname}>{story.user}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* <Divider/> */}
      <View style={styles.postheader}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "black",
    marginTop: -500,
    flexDirection: "row",
  },
  headerlogo: {
    marginTop: 5,
    height: 40,
    width: 40,
    marginLeft: 10,
  },
  headericon: {
    marginLeft: 'auto',
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  moreimg: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
  },
  storyheader: {
    height: 120,
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  storyContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  story: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  storyname: {
    fontFamily: "Poppins",
    fontSize:13,
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },
  postheader:{
    backgroundColor:"white",
    height:80,
    width:"100%",

  },
});
