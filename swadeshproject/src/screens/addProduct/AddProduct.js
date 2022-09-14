import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddProduct() {
    return (
        <View style={styles.addContainer}>
            <Text>Add product</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    addContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
