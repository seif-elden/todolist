import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
      <View >
        <Text style={styles.header}>My TODO List</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header:{
      fontWeight:"bold",
      fontSize:18,
      marginTop:30,
      textAlign:"center",
      backgroundColor:"red",
      padding:25,
    } ,
  })