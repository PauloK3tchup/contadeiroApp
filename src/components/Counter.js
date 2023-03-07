import { Component } from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  incrementar() {
    if (this.state.count < 50) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  subtrair() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }
  render() {
    return (
      <View style={styles.contador}>
        <Text style={styles.textoComFundinho}>
          Caveiras: {this.state.count}
        </Text>
        <Button onPress={() => this.incrementar()} title="+💀" />
        <Button onPress={() => this.subtrair()} title="-💀" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textoComFundinho: {
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
  contador: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "crimson",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});
