import React from 'react'
import { View, Text, Image } from 'react-native'

const image = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
const title = 'Matts Restaurant'
const description = 'description'

export default function About() {
    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantTitle title={title}/>
            <RestaurantDescription description={description} />
        </View>
    )
}

const RestaurantImage = ({image}) => (
    <Image 
        source={{uri: image}} 
        style={{
            width: '100%',
            height: 180,
        }}
    />
)

const RestaurantTitle = (props) => (
    <View>
    <Text
        style={{
            fontSize: 29,
            fontWeight: '600',
            marginTop: 10,
            marginHorizontal: 15,
        }}
    >
        {props.title}
    </Text>
    </View>
)

const RestaurantDescription = ({description}) => (
    <Text
        style={{
            marginTop: 10, 
            marginHorizontal: 15,
            fontWeight: '400',
            fontSize: 15.5
        }}
    >{description}</Text>
)



