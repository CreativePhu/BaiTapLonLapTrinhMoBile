
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './compoments/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ccc",
    backgroundColor: "#fff",
    paddingTop: 25
  },
});
