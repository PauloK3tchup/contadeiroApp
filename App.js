import { StyleSheet, Text, View } from "react-native";
import Counter from "../contadeiroApp/src/components/Counter";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Adicione até 50 caveiras (💀)</Text>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 20,
  },
});
