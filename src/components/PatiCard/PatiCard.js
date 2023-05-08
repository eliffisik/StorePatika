import React from "react"
import {View,Text,Image} from "react-native";

import styles from "./PatiCard.styles";


const PatiCard =({product})=>{
    return (
        <View style={styles.container}>
   <Image source={{uri: product.imageUrl}} style={styles.img} />
        </View>
    )
}

export default PatiCard;