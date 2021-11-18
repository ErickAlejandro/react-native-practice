// Estos campos siempre deben ser exportados
import React from "react";
import { TextInput, Button, Text, View } from "react-native";

// Aquí se comienza a crear el componente como tal y la sintaxis o forma de escribir es siempre comenzar con mayúsculas y agregando estoa cada palabra que se añada
export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Enviar" onPress={() => console.log("Enviar")} />
    </View>
  );
}
