import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: '600'
    }
})

export default function MenuItem({foods}) {
    return (
        <ScrollView vertical showsVerticalScrollIndicator={false} >
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <BouncyCheckbox 
                            iconStyle={{
                            borderColor: 'lightgray',
                            borderRadius: 0,
                            }}
                            fillColor='green'
                        />
                        <FoodInfo food={food}/>
                        <FoodImage food={food}/>
                    </View>
                    <Divider 
                        width={0.5} 
                        orientation='vertical' 
                        style={{marginHorizontal: 20}}
                    />
                </View>
            ))}
        </ScrollView>
        
        
    )
}

const FoodInfo = ({food}) => (      
    <View style={{width: 240, justifyContent: 'space-evenly'}}>
        <Text style={styles.titleStyle}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>
    </View>
    
)

const FoodImage = ({food}) => (
    <View>
        <Image 
            source={{uri: food.image}}
            style={{width: 100, height: 100, borderRadius: 8}}
        />
    </View>
)