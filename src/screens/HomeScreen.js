import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props; //Vamos a usar esta constante para poder aplicar la navegacion por toda al aplicacion
  const GoToSettings = () => { //Funcion flecha par la constante de ir a ajustes
    navigation.navigate("Settings"); //Colocamos la ruta de navigation, con la ayuda del consolelog ubicamos NAVIGATE para realizar el redireccionamiento, luego seleccionamos el nombre de la ruta
  };

  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen </Text>
      <Text>Estamos en HomeScreen </Text>
      <Text>Estamos en HomeScreen </Text>
      <Text>Estamos en HomeScreen </Text>
      <Button onPress={GoToSettings} title="Ir Ajustes" />
    </SafeAreaView>
  );
}
