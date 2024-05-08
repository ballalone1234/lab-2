import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical :"5%",
    margin: "10%",
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius : 3,
  },
  image: {
    width: 200,
    padding: "10%",
    marginHorizontal: "1%",
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#000',
  },
});
