import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  // const { FirstName = "Erick", LastName = "Ayala Churo" } = props;
  const { FirstName, LastName} = props;

  return (
    <Text>
      Hola {FirstName} {LastName}
    </Text>
  );
}

// Creacion de los default prps con el fin de que se rellenen autoamticamente sin necesidad de meter mano.
// Saludar.defaultProps = {
//   FirstName: "Erick",
//   LastName: "Ayala Churo",
// };

Saludar.propTypes = {
  FirstName: PropTypes.string,
  LastName: PropTypes.string,
}
