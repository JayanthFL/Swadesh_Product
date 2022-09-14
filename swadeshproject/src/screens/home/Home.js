import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { ProductList } from '../constants/Constants';
import { firebase } from '@react-native-firebase/database';

const renderProduct = ({ item }) => {
	const reference = firebase
		.app()
		.database('https://swadeshproject-default-rtdb.asia-southeast1.firebasedatabase.app')
		.ref('/');
console.log('reference',reference)
	return (
		<View style={styles.productCard}>
			<Image source={{ uri: item.image }} style={styles.productImage} />
			<View style={styles.cardBottom}>
				<View>
					<Text style={styles.productName}>{item.name}</Text>
					<View style={styles.priceConrtainer}>
						<Text style={styles.offerPrice}>
							{'\u20B9'} {item.offerPrice}
						</Text>
						<Text style={styles.price}>{item.price}</Text>
					</View>
				</View>
				<View style={styles.btnWrapper}>
					<TouchableOpacity style={styles.editBtn}>
						<Text style={styles.editBtnLbael}>Edit</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.deleteBtn}>
						<Text style={styles.deleteBtnLbael}>Delete</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default function Home({ navigation }) {
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				style={styles.list}
				data={ProductList}
				renderItem={renderProduct}
				keyExtractor={(item) => item.id}
			/>
			<TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Add Product')}>
				<Text style={styles.addBtnLabel}>{'\u2795'} Add Product</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		backgroundColor: 'white'
	},
	productCard: {
		padding: 10
	},
	productImage: {
		width: '100%',
		height: 200,
		borderRadius: 10
	},
	cardBottom: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10
	},
	productName: {
		color: '#595959',
		fontSize: 17,
		fontWeight: '700',
		paddingBottom: 5
	},
	priceConrtainer: {
		flexDirection: 'row'
	},
	price: {
		color: '#8c8c8c',
		fontSize: 15,
		textDecorationLine: 'line-through'
	},
	offerPrice: {
		color: '#191919',
		fontSize: 15,
		fontWeight: '700',
		marginRight: 10
	},
	btnWrapper: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	editBtn: {
		borderWidth: 1,
		borderColor: '#0096e3',
		borderRadius: 5,
		padding: 5,
		marginRight: 10
	},
	editBtnLbael: {
		color: '#0096e3'
	},
	deleteBtn: {
		borderWidth: 1,
		borderColor: '#ff4c4c',
		padding: 5,
		backgroundColor: '#ff4c4c',
		borderRadius: 5
	},
	deleteBtnLbael: {
		color: 'white'
	},
	addBtn: {
		backgroundColor: 'white',
		padding: 15
	},
	addBtnLabel: {
		borderRadius: 5,
		borderColor: '#595959',
		borderWidth: 1,
		borderStyle: 'dashed',
		textAlign: 'center',
		padding: 15,
		color: '#595959'
	}
});
