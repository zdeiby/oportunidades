import react from "react";
import { Text, View } from "react-native";
import Constants from 'expo-constants';
import RepositoryList from "./RepositoryList.jsx";

const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight}}>
            <Text>Hola mundo</Text>
            <RepositoryList/>
        </View>
    )
}

export default Main;