import {Pressable, StyleSheet, Text, View} from "react-native";
import {StatusBar} from 'expo-status-bar';


export default function Button({setcount, count}) {
    return (
        <View style={styles.ButtonContainer}>
            <Pressable style={[styles.Button, styles.Green]} onPress={() => setcount(count + 1)}>
                <Text style={{fontSize: 50}}>+</Text>
            </Pressable>
            <Pressable style={[styles.Button]} onPress={() => setcount(count === 0, alert('Счёт равен: 0'))}>
                <Text style={{fontSize: 20}}>Reset</Text>
            </Pressable>
            <Pressable style={[styles.Button, styles.Red]} onPress={() => setcount(count - 1)}>
                <Text style={{fontSize: 50}}>-</Text>
            </Pressable>
            <StatusBar style="auto"/>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        ButtonContainer: {
            width: 220,
            height: 'auto',
            marginHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 3,
            flexDirection: "row",
            gap: 15
        },
        Button: {
            borderRadius: 10,
            width: '40%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: 'gray',
            borderStyle: "solid",
            borderColor: 'black',
            borderWidth: 2
        },
        Green: {
            backgroundColor: 'lightgreen',
            elevation: 20,
            shadowColor: '#47f5da',
        },
        Red: {
            backgroundColor: 'red',
            elevation: 20,
            shadowColor: '#f366c2',
        },

    }
)