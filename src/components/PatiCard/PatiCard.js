import React from "react"
import {View,Text,Image} from "react-native";

import styles from "./PatiCard.styles";


const PatiCard =({product})=>{
    return (
        <View style={styles.container}>
   <Image source={{uri: product.imageUrl}} style={styles.img} />
   <Text style={styles.title}>{product.title}</Text>
   <Text>{product.price}</Text>
   {!product.inStock&&<Text style={styles.stock}>Stokta Yok!</Text>}
        </View>
    )
}

export default PatiCard;