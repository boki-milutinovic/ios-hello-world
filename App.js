import { Alert, Button, StyleSheet, View } from 'react-native';

export default function App() {
  const showHello = () => {
    Alert.alert('Hello World');
  };

  return (
    <View style={styles.container}>
      <Button title="Press me" onPress={showHello} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
