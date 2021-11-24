import React from 'react'
import { Text, Button, SafeAreaView } from 'react-native'
import HomeScreen from './HomeScreen';

export default function SettingsScreen(props) {

    const {navigation} = props;
    const goToPage = (pageName)=>{ //Navegacion con un parametro, en este caso es el parametro pageName
        navigation.navigate(pageName); //Usamos el 
    };


    return (
        <SafeAreaView>
            <Text>Estamos en TAB</Text>
            <Text>Estamos en TAB</Text>
            <Text>Estamos en TAB</Text>
            <Text>Estamos en TAB</Text>
            <Button onPress={()=> goToPage("Home")} title="Ir a Home" />
        </SafeAreaView>
    );
}
