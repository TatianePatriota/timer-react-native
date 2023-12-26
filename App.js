import { StatusBar } from "expo-status-bar";
import { useCallback, useMemo, useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [numberTime, setNumberTime] = useState(0);
  const [lastTime, setLastTime] = useState("");
  const [textTimer, setTextTimer] = useState("Iniciar");

  const intervalId = useRef(null);

  startTimer = () => {
    intervalId.current = setInterval(() => {
      setNumberTime((oldTime) => oldTime + 0.1);
    }, 100);
  };

  stopTimer = useCallback(() => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  }, [intervalId]);

  handleTimer = useCallback(() => {
    if (intervalId && intervalId.current) {
      stopTimer();
      setTextTimer("Iniciar");
    } else {
      startTimer();
      setTextTimer("Parar");
    }
  }, [intervalId]);

  clearTimer = () => {
    stopTimer();
    setNumberTime(0);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="gray" />
      <Image source={require("./src/images/cronometro.png")} />
      <Text style={styles.timer}>{numberTime.toFixed(1)}</Text>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.timerButton} onPress={handleTimer}>
          <Text style={styles.textTimerButton}>{textTimer}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.timerButton} onPress={clearTimer}>
          <Text style={styles.textTimerButton}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaLastTime}>
        <Text style={styles.textAreaLastTime}>Último tempo:{lastTime}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222",
  },
  timer: {
    fontSize: 65,
    color: "#fff",
    marginTop: -160,
    fontWeight: "bold",
  },
  buttonArea: {
    flexDirection: "row",
    marginTop: 100,
    height: 40,
  },
  timerButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    margin: 17,
    borderRadius: 9,
    backgroundColor: "#fff",
  },
  textTimerButton: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
  areaLastTime: {
    marginTop: 40,
  },
  textAreaLastTime: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
});
