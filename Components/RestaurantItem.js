import React from 'react'
import { View, Text, Image,  TouchableOpacity  } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom: 30 }}>
            <View 
                style={{
                    marginTop: 10,
                    padding: 15,
                    backgroundColor: 'white'
                }}
            >
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
}

const RestaurantImage = () => (
    <>
        <Image 
            source={{
                uri: 'data:image/jpeg;base64,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'
            }}
            style={{
            width: '100%',
            height: 180, 
            }}
        />
        <TouchableOpacity
            style={{
                position: 'absolute',
                right: 20,
                top: 20,
            }}
        >
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
        </TouchableOpacity>
    </>
)

const RestaurantInfo = () => (
    <View 
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
        }}
    >
        <View>
            <Text style={{fontSize: 15, fontWeight:'bold'}}>Farmhouse Kitchen Thai Cuisine</Text>
            <Text style={{fontSize: 13, color: 'gray'}}>30-45 • minutes</Text>
        </View>
        <View 
        style={{
            backgroundColor: '#eee', 
            height: 30, 
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
        }}
        >
            <Text>4.5</Text>
        </View>
    </View>
)