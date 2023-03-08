import { Component } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";

export default class Counter extends Component {
  state = {
    count: 0,
    step: 2,
  };
  incrementar() {
    if (this.state.count < 500) {
      this.setState({ count: this.state.count + this.state.step });
    } else {
      if (this.state.count > 500) {
        this.setState({ count: 500 });
      }
    }
  }
  subtrair() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - this.state.step });
    } else {
      if (this.state.count < 0) {
        this.setState({ count: 0 });
      }
    }
  }
  alteraStep(e) {
    this.setState({ step: parseInt(e) });
  }
  render() {
    return (
      <View style={styles.contador}>
        <Text style={styles.textoComFundinho}>
          Caveiras: {this.state.count}
        </Text>
        <Button onPress={() => this.incrementar()} title="+💀" />
        <Button onPress={() => this.subtrair()} title="-💀" />
        <TextInput
          style={styles.inputComFundinho}
          value={this.state.step}
          onChangeText={(e) => this.alteraStep(e)}
          inputMode="numeric"
          keyboardType="numeric"
        />
        <Text style={styles.textoComFundinho}>Step: {this.state.step}</Text>
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
  inputComFundinho: {
    fontWeight: "bold",
    color: "white",
    margin: 10,
    backgroundColor: "#b50021",
    padding: 15,
    borderRadius: 5,
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
