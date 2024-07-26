import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import Button from "./Button";

export default function App() {

    const [count, setcount] = useState(0)
    return (
        <View style={styles.container}>
            <Text style={{color: 'black', fontSize: 24, marginBottom: 20}}>Счёт: {count}</Text>
            <Button count={count} setcount={setcount}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        backgroundColor: '#eae3b1',
        alignItems: 'center',
        justifyContent: 'center',

    }
});
