import { StyleSheet, View, Text, TextInput } from "react-native";


export default function Task4() {
    return (
        <View style={styles.container}>
            <View style={styles.downSection}>
                <TextInput style={styles.input} placeholder= {"Write a task"} />
            </View>
            <View style={styles.box}>
                <Text style={styles.headerText}>+</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 246,
        height: 50,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 60,
        marginTop: 300,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    input: {
        color: '#C0C0C0',
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 28
    },
    headerText: {
        textAlign: "center",
        fontSize: 30,
        color: '#C0C0C0',
    },
    box: {
        height: 60,
        width: 60,
        borderRadius: 52,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
        flexDirection: 'row',
        marginLeft: 175,
    },
})