import { StyleSheet,Text,View,Image,ScrollView } from "react-native"

export default function Search() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Search</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
      },
    title:{
        color:"white",
        marginLeft:150,
        marginTop:300,
    },
});
