import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({navigation}) {
    return (
        <View style={styles.homeContainer}>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Add Product')}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    homeContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
