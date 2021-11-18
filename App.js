import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native"; //Se puede agregar cualquier componente desde aquí
import { NavigationContainer } from "@react-navigation/native"; //Navigatio container
import Saludar from "./src/components/Saludar";

// props es información que se puede transportar de un lado a otro

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Hello Word!</Text>
        <Text>Esta es mi primera aplicación en ReactNative.</Text>
        <Saludar FirstName="Kenlly" LastName="Ovaco Quindi" />
        <Saludar FirstName="Erick" LastName="Ayala" />
        <Saludar FirstName="Esteban" LastName="Palomeque" />
        {/* <Saludar FirstName="Kenlly" LastName="Ovaco" /> */}
        {/* <Saludar FirstName="Gabriela" LastName="Barros" /> */}
      </View>
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
