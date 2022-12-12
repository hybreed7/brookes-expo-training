import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from 'react';


export default function Task({title}) {
    const [bgColor, setBgColor] = useState(null);

    const handlePress = () => {
        const newColor = bgColor ? null : 'blue';
        setBgColor(newColor);
        // setBgColor('blue');
      };
      
    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <View style={styles.square} />
                <Text>{title}</Text>
            </View>
            <TouchableOpacity onPress={handlePress}>
            <View  style={[styles.checkbox, { backgroundColor: bgColor }]}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: 53,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 10,
        marginBottom: 20
    },
    square: {
        backgroundColor: "rgba(85, 188, 246, 0.4);",
        height: 24,
        width: 24,
        marginRight: 15,
        borderRadius: 5
    },
    checkbox: {
        borderWidth: 2,
        borderColor: "#55BCF6",
        backgroundColor: "#fff",
        height: 12,
        width: 12,
        borderRadius: 5
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center"
    }
})


// onPress={()=>{this.setState.backgroundColor}}