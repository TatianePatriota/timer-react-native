import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="gray" />
      <Image source={require("./src/images/cronometro.png")} />
      <Text styles={styles.timer}>0.0</Text>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.timerButton}>
          <Text style={styles.textTimerButton}>Iniciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timerButton}>
          <Text style={styles.textTimerButton}>Parar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
