import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default function AddProduct() {
    const [values, setValues] = useState({})

	return (
		<View style={styles.addContainer}>
            <View style={styles.fromContainer}>
                <TouchableOpacity
                    style={styles.imagePicker}
                    onPress={() =>
                        ImagePicker.openPicker({
                            width: 300,
                            height: 400,
                            cropping: true
                        }).then((slectedImage) => {
                            console.log(slectedImage);
                            setValues(prev => ({...prev, image: slectedImage.path}))
                        })}
                >
                    {values?.image ?  <ImageBackground source={{uri: values?.image}} style={styles.productImage}/> : <Text style={{ color: 'black' }}>{'\u2795'} Add product image</Text>}
                </TouchableOpacity>
                <Text style={styles.inptLabel}>Name:</Text>
                <TextInput value={values?.name} onChangeText = {text => setValues(prev => ({...prev, name: text}))} style={styles.textInput}/>
                <Text style={styles.inptLabel}>Price:</Text>
                <TextInput value={values?.price} onChangeText = {text => setValues(prev => ({...prev, price: text}))} style={styles.textInput}/>
                <Text style={styles.inptLabel}>Offer price:</Text>
                <TextInput value={values?.offerPrice} onChangeText = {text => setValues(prev => ({...prev, offerPrice: text}))} style={styles.textInput}/>
            </View>
            <TouchableOpacity
                style={styles.submitBtn}
                onPress = {() => {
                    console.log('values', values)
                }}
            >
                <Text style={styles.submitBtnLabel}>Submit</Text>
            </TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	addContainer: {
		flex: 1,
		padding: 15,
        justifyContent: 'space-between'
	},
    fromContainer: {
        flex: 1
    },
    productImage: {width: '100%', height: "100%"},
    imagePicker: {
        backgroundColor: '#cccccc',
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        overflow: 'hidden'
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginTop: 10,
        color: 'black',
        paddingLeft: 10,
        paddingRight: 10
    },
    inptLabel: {
        color: 'black',
        marginTop: 10
    },
    submitBtn: {
        backgroundColor: '#0096e3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    submitBtnLabel: {
        color: 'white',
        fontWeight: '700',
        fontSize: 17
    }
});
