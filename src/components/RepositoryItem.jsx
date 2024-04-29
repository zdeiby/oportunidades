import react from "react";
import { View, Text, StyleSheet } from "react-native"


const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
    <Text style={styles.strong}>Id: {props.id}</Text>
    <Text>Nombre: {props.fullName}</Text>
    <Text>Estrellas: {props.stars}</Text>
</View>
)

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5,
    },
    strong: {
        color:'#09f',
        fontWeight:'bold',
        marginBottom: 5
    }
})



export default RepositoryItem