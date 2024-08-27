import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#6200EE" />
      <Text style={styles.text}>Contador: {count}</Text>
      <Button title={`Contando!! (${count})`} onPress={handlePress} />
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
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
