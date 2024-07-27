import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Divider } from "react-native-elements";
import Users from "../users.json";
import Post from "../comments.json";

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
      <ScrollView showsVerticalScrollIndicator={true}>
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
     
      <View style={styles.postheader}>
        <Divider width={1} orientation="vertical"/>
        <View style={styles.postContent}>
          <View style={styles.postHeader}>
            <Image source={{ uri: Post.post.user.profile_picture }} style={styles.postProfilePicture} />
            <Text style={styles.postUsername}>{Post.post.user.username}</Text>
            <Image source={require("../morepost.png")} style={styles.morepost}/>
          </View>
          <Image source={{ uri: Post.post.image }} style={styles.postImage} />
          <View style={styles.icons}>
          <Image source={require("../heart.png")} style={styles.posticon1}/>
          <Image source={require("../chat.png")} style={styles.posticon2}/>
          <Image source={require("../send.png")} style={styles.posticon2}/>
          </View>
          <Text style={styles.textlike}>1,00,000 likes</Text>
          <View style={styles.captionhead}>
          <Text style={styles.usernametext}>{Post.post.user.username}</Text>
          <Text style={styles.captiontext}>{Post.post.caption}</Text>
          </View>
          <Text style={styles.commenttitle}>View all comments</Text>
          {Post.post.comments.map((comment, index) => (
            <View key={index} style={styles.commentContainer}>
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentUsername}>{comment.user.username}</Text>
                <Text style={styles.commentText}>{comment.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    height: 50,
    width: "100%",
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
  },
  headerlogo: {
    height: 40,
    width: 40,
  },
  headericon: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: 13,
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },
  postheader: {
    backgroundColor: "black",
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  postContent: {
    marginTop: 10,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  postProfilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  postUsername: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius:10,
    marginTop:10,
  },
  postCaption: {
    color: "white",
    marginVertical: 10,
    fontSize: 16,
  },
  commentContainer: {
    marginTop:5,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  commentProfilePicture: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  commentTextContainer: {
    marginLeft: 10,
  },
  commentUsername: {
    color: "white",
    fontWeight: "bold",
  },
  commentText: {
    color: "white",
  },
  morepost:{
    height:30,
    width:30,
    marginLeft:250,
  },
  icons:{
    flexDirection:"row",
    gap:20,
  },
  posticon1:{
    height:30,
    width:30,
    marginTop:10,
  },
  posticon2:{
    height:25,
    width:25,
    marginTop:10,
  },
  captionhead:{
    marginTop:10,
    flexDirection:"row",
    gap:15,
  },
  textlike:{
    marginTop:10,
    color:"white",
    fontSize:15,
    fontWeight:"bold",
  },
  usernametext:{
    color:"white",
    fontSize:15,
    fontWeight:"bold",
  },
  captiontext:{
    color:"white",
  },
  commenttitle:{
    marginTop:5,
    color:"grey",
  }
});
