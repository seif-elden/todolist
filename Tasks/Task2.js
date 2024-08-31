import { StyleSheet, Text, View } from 'react-native';
import Header from "../componants/Header"
import Body from "../componants/Body"

export default function Task2() {
    return (
      <View style={styles.container}>
        <Header></Header>
        <Body></Body>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
      flex: 1, // Ensures the container takes up the full screen height
  },
});
