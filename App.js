import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native"; //Se puede agregar cualquier componente desde aquí
import { NavigationContainer } from "@react-navigation/native"; //Navigatio container
import NavigationStack from "./src/navigation/NavigationStack";

// props es información que se puede transportar de un lado a otro

export default function App() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
