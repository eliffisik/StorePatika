import React from "react";
import {View, StyleSheet, TextInput, FlatList} from 'react-native';
import product_data from "./product-data.json";
import PatiCard from "./components/PatiCard/PatiCard";

const App =()=>{
  const renderProduct=({item})=><PatiCard product={item}/>
  return(
    <View style={styles.container}>
    <TextInput style={styles.textInput} placeholder="Ara.." />
<FlatList
 horizontal={false}
 numColumns={2}
 keyExtractor={item => item.id.toString()}
 data={product_data}
 renderItem={renderProduct}

/>
   </View>
  )

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#eceff1',
  },
});

export default App;