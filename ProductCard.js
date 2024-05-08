import React from 'react';
import { FlatList, Text, Image, View } from 'react-native';
import { styles } from './Styles';


const products = [
  { id: 1, name: 'Product', price: '$999', imageUrl: 'https://reactjs.org/logo-og.png' },
  { id: 2, name: 'Product', price: '$1499', imageUrl: 'https://reactjs.org/logo-og.png' },
  { id: 3, name: 'Product', price: '$1999', imageUrl: 'https://reactjs.org/logo-og.png' },
  { id: 4, name: 'Product', price: '$2999', imageUrl: 'https://reactjs.org/logo-og.png' },
];

const ProductCard = ({ name, price, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
      />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

const ProductsList = () => {
  return (
    <FlatList style={styles.container2}
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          name={item.name}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      )}
    />
  );
};

export default ProductsList;