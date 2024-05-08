import React from 'react';
import { View } from 'react-native';
import ProductCard from './ProductCard';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', backgroundColor: '#ffebef'}}>
      <ProductCard />
    </View>
  );
}
